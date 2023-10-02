import { AiOutlineLoading3Quarters } from "react-icons/ai";

export interface ILoading {
  isLoading: boolean;
}

const LoadingDefault = (props: ILoading): JSX.Element => {
  const { isLoading } = props;
  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <div className="loading-loader">
            <AiOutlineLoading3Quarters size={20} />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingDefault;
