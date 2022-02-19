const getIconSource = (iconName) => {
  switch (iconName) {
    case "bar":
      return "icons/bar.png";
      break;
    case "sheet":
      return "icons/sheet.png";
      break;
    case "report":
      return "icons/report.png";
      break;

    default:
      break;
  }
};

function IconCard({ title, icon, isActive, isUrgent }) {
  return (
    <div
      className={`relative flex flex-col items-start justify-evenly rounded-lg shadow-lg px-2 py-3 ${
        isActive ? "bg-primary text-light" : "bg-light text-muted"
      }`}>
      {isUrgent && (
        <span className="absolute -top-2 -right-2 bg-secondary w-4 h-4 rounded-full flex flex-row items-center justify-center text-center text-light text-sm font-normal p-2">
          !
        </span>
      )}
      <img src={getIconSource(icon)} className="h-4 w-4 mb-2" alt={title} />
      <span className="text-left text-xs font-normal">{title}</span>
    </div>
  );
}

export default IconCard;
