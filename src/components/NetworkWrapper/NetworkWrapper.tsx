import { ReactNode, FC } from "react";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

interface IProps {
  isLoading: boolean;
  isError: boolean;
  isMoreLoading: boolean;
  children: ReactNode;
}

export const NetworkWrapper: FC<IProps> = ({
  isLoading,
  isError,
  isMoreLoading,
  children,
}) => {
  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;
  if (isMoreLoading)
    return (
      <>
        {children}
        <Loader />
      </>
    );
  return <>{children}</>;
};
