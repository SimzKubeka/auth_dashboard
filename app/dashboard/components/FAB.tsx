type FABProps = {
  onClick: () => void;
};

export function FAB({ onClick }: FABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed font-semibold bottom-6 right-6 bg-[#4bc0c0] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#338b8b]"
    >
      + Add Widget
    </button>
  );
}
