const showTopButton = (
  position: number,
  setPosition: React.Dispatch<React.SetStateAction<number>>,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let timer: NodeJS.Timeout | null;

  const handleScroll = () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        const moving = window.scrollY;
        setVisible(position > moving);
        setPosition(moving);
      }, 200);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export default showTopButton;
