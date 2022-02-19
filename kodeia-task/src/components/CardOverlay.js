function CardOverlay({ isShown, closeCard }) {
  return isShown ? (
    <div className="absolute h-4/6 z-10 w-full left-0 bottom-0 bg-primary rounded-t-lg shadow-xl flex flex-col items-center justify-start px-4 py-2">
      <img src="icons/privacy.png" className="w-4/6 h-auto rounded-full shadow-sm" alt="User Privacy" />
      <h1 className="text-left text-lg font-bold text-light">Your data is yours</h1>
      <p className="text-center text-xs font-normal text-light">
        None of your data stored in the cloud will be available for any third parties under any circumstance. All the
        sensitive data of customers &amp; users will be encrypted prior to storage. All our APIs and frontend systems
        operate over SSL providing you additional protection, furthermore all apps accessing the APIs should get
        authorized by us prior to supplying additional services for you.
      </p>
      <button
        className="flex flex-row items-center justify-center mt-4 px-6 py-2 h-12 w-full rounded-md bg-light text-primary hover:shadow-lg transition-shadow duration-150"
        onClick={closeCard}>
        Close
      </button>
    </div>
  ) : null;
}

export default CardOverlay;
