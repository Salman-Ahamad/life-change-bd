"use client";

import { navFooterHidePath } from "@/lib/constant";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useIgnorePate = (): boolean => {
  const pathname = usePathname();
  const [ignorePath, setIgnorePath] = useState<boolean>(
    navFooterHidePath.includes(pathname)
  );

  useEffect(() => {
    setIgnorePath(navFooterHidePath.includes(pathname));
  }, [pathname]);

  return ignorePath;
};
