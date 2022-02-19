import { useState, useEffect } from "react";

function FormOverlay({ isShown }) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [invitationCode, setInvitationCode] = useState([]);

  useEffect(() => {
    console.log("invite", invitationCode);
  }, invitationCode);

  const submitForm = (e) => {
    try {
      // prevent the form from reloading the page
      e.preventDefault();

      let response = fetch("https://fetest.kodeia.com/api", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          phone: phoneNumber,
          code: invitationCode.join(""),
        }),
      })
        .then((response) => response.json())
        .then(({ data }) => {
          // on success
          console.log("User ID:", data.id);
          setEmail("");
          setPhoneNumber("");
          setInvitationCode([]);
        })
        .catch((e) => {
          console.log("Oops something went wrong!", e);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const InviteCodeInput = (index) => {
    return (
      <input
        id={`phone-number-${index}`}
        key={index}
        className="h-10 w-full rounded-md appearance-none border border-muted shadow-sm shadow-primary focus:outline-none py-2 px-3 text-dark leading-tight"
        onChange={(e) => setInvitationCode([...invitationCode, e.target.value])}
        type="number"></input>
    );
  };

  function renderInviteCodeInputs() {
    let inviteCodeArray = [];
    for (var i = 0; i < 5; i++) {
      inviteCodeArray.push(InviteCodeInput(i));
    }
    return inviteCodeArray;
  }

  const inviteCodeInputs = renderInviteCodeInputs();

  return isShown ? (
    <div className="absolute z-10 h-full w-full left-0 bottom-0 backdrop-blur-lg flex flex-col items-center justify-start px-4 pt-32 pb-2">
      <h1 className="text-cente text-xl font-bold mb-8">Activate account</h1>
      <form className="flex flex-auto flex-col items-stretch justify-between w-full" onSubmit={submitForm}>
        <div className="flex flex-col items-stretch justify-start">
          <div className="mb-4">
            <label className="block text-left text-sm font-bold text-black mb-3" htmlFor="email-address">
              Email Address
            </label>
            <input
              id="email-address"
              className="h-10 w-full rounded-md appearance-none border border-muted shadow-sm shadow-primary focus:outline-none py-2 px-3 text-dark leading-tight"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"></input>
          </div>
          <div className="mb-4">
            <label className="block text-left text-sm font-bold text-black mb-3" htmlFor="phone-number">
              Phone Number
            </label>
            <input
              id="phone-number"
              className="h-10 w-full rounded-md appearance-none border border-muted shadow-sm shadow-primary focus:outline-none py-2 px-3 text-dark leading-tight"
              placeholder="+94701234567"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"></input>
          </div>
          <div className="mb-4">
            <label className="block text-left text-sm font-bold text-black mb-3">Invitation Code</label>
            <div className="grid grid-cols-5 gap-2">{inviteCodeInputs}</div>
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-end">
          <button
            className="flex flex-row items-center justify-center mt-4 px-6 py-2 h-12 w-full rounded-md bg-primary text-light hover:shadow-lg transition-shadow duration-150"
            type="submit">
            Activate
          </button>
          <a className="text-center text-sm text-black font-normal my-2" href="https://www.google.com/" target="_blank">
            visit app website
          </a>
        </div>
      </form>
    </div>
  ) : null;
}

export default FormOverlay;
