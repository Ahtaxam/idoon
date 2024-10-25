export type SlideOverProps = {
  title: string | React.ReactNode;
  children: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export type FilterSlideoverProps = {
  isOpen: boolean;
  onClose: () => void;
  showSaveModal: boolean;
  setShowSaveModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SavedFilter = {
  id: string;
  name: string;
  isDefault: boolean;
};
