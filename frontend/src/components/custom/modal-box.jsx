import { Card } from "../ui/card";

export const ModalBox = ({ isVisible, onExit, children }) => {
  const handleSectionClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isVisible ? (
        <section
          className="fixed top-0 left-0 z-20 bg-[#00000059] w-screen h-screen flex items-center justify-center backdrop-blur-sm"
          onClick={onExit}
        >
          <div className="absolute top-40w w-96 ">
            <Card onClick={handleSectionClick}>{children}</Card>
          </div>
        </section>
      ) : null}
    </>
  );
};
