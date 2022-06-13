import React from "react";
import HightlightFirstWord from "../shared/HightlightFirstWord";
import classNames from "classnames";

interface Props {
  className?: string;
  title: string;
  description?: string;
  classTitle?: string;
  classDescription?: string;
  children?: React.ReactNode;
}

const SectionTitle = (props: Props) => {
  const { title, description, classTitle, classDescription, children } = props;

  return (
    <div className="p-x-root py-32 bg-text  w-full ">
      <div className="g mb-12 lg:flex items-center justify-center">
        <HightlightFirstWord
          className={classNames(
            "text-primary uppercase font-[700]  text-[40px] ",
            classTitle
          )}
          content={title}
        />
      </div>
      {description && (
        <p
          className={classNames(
            "text-primary uppercase font-[700]  text-[40px] ",
            classDescription
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default React.memo(SectionTitle);
