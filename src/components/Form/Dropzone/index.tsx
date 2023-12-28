import { useCallback } from 'react';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';
import style from './style.module.sass';
import Icon from 'components/Icon';
import FeaturedIcon from 'components/Icon/FeaturedIcon';

type Props = {
  handleFiles: (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => void;
  clickText?: string;
  dropText?: string;
  acceptedFilesText?: string;
  textWhenDropping?: string;
  textWhenDropReject?: string;
};

const AppDropzone = ({
  handleFiles,
  acceptedFilesText,
  clickText,
  dropText,
  textWhenDropping,
  textWhenDropReject,
}: Props) => {
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
      handleFiles(acceptedFiles, fileRejections, event);
    },
    [handleFiles],
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg'], 'application/pdf': ['.pdf'] },
  });

  return (
    <div className={style.dropzone} {...getRootProps()}>
      <input {...getInputProps()} />
      <FeaturedIcon
        color="gray"
        name="upload-cloud"
        fill="none"
        size={20}
        stroke="#475467"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 20 20"
      />
      <p className={style.clickCall}>
        {clickText} <span>{dropText}</span>
      </p>
      {isDragReject && textWhenDropReject ? (
        <p>{textWhenDropReject}</p>
      ) : (
        isDragActive && textWhenDropping && <p>{textWhenDropping}</p>
      )}
      {!isDragActive && !isDragReject && <p>{acceptedFilesText}</p>}
    </div>
  );
};

export default AppDropzone;
