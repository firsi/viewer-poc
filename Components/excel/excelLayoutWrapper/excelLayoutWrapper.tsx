import React from "react";
import { ExcelLayoutContentWrapper } from "./excelLayoutWrapper.style";

interface IExcelLayoutWrapperInterface {
  className?: string | undefined;
  children: React.ReactNode;
}

const ExcelLayoutWrapper: React.FC<IExcelLayoutWrapperInterface> = ({ className, children, ...rest }): JSX.Element => (
  <ExcelLayoutContentWrapper
    className={className !== null ? `${className} isoLayoutContentWrapper` : "isoLayoutContentWrapper"}
    {...rest}
  >
    {children}
  </ExcelLayoutContentWrapper>
);

export default ExcelLayoutWrapper;
