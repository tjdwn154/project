import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export const EmailModal = (props) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u6gr05c",
        "template_ogelld9",
        form.current,
        "Sqm8Zts8w1gIAbnyZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [isSend, setIsSend] = useState(false);
  return (
    <div id="emailModalWrap">
      <div className="container">
        <button
          className="closeBtn"
          onClick={() => {
            props.setIsClicked(false);
          }}
        >
          X
        </button>
        <p>구매하신 티켓을 어디로 보내드릴까요?</p>
        <br />
        <div className="container__item">
          <form className="form" ref={form} onSubmit={sendEmail} id="emailForm">
            <input
              type="email"
              name="user_email"
              placeholder="abc@abc.com"
              className="form__field "
            />
            <input
              type="submit"
              value={isSend ? "완료" : "발송"}
              className="submitBtn btn btn--primary btn--inside uppercase"
              onClick={() => {
                setIsSend(!isSend);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
