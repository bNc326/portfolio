import React, { useState, useRef } from "react";
import Container from "../UI/Container";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import { TextInput, Textarea, Alert } from "flowbite-react";
import {
  MdPerson,
  MdEmail,
  MdPhone,
  MdWarning,
  MdDone,
  MdMap,
} from "react-icons/md";
import Lottie from "lottie-react";
import Animation from "../../assets/lottie/contact.json";
import { AnimationOnScroll } from "react-animation-on-scroll";

type formKey = {
  value: string;
  valid: boolean;
  error: string;
  firstTouch: boolean;
  pattern: RegExp;
};

interface Form extends Record<string, formKey> {
  name: formKey;
  email: formKey;
  phone: formKey;
  message: formKey;
}
const Contact = () => {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [sendForm, setSendForm] = useState<boolean>(false);
  const [sendSuccess, setSendSuccess] = useState<
    "no send" | "success" | "warning"
  >("no send");
  const [formInput, setFormInput] = useState<Form>({
    name: {
      value: "",
      valid: false,
      error: "Adj meg egy nevet!",
      firstTouch: false,
      pattern: /^(\S\D{1,})$/,
    },
    email: {
      value: "",
      valid: false,
      error: "Adj meg egy érvényes emailt!",
      firstTouch: false,
      pattern: /^\S+@\S+\.\S+$/,
    },
    phone: {
      value: "",
      valid: false,
      error: "Adj meg egy érvényes telefonszámot!",
      firstTouch: false,
      pattern: /^\+?[0-9][0-9]{10,10}$/,
    },
    message: {
      value: "",
      valid: false,
      error: "Adj meg egy üzenetet!",
      firstTouch: false,
      pattern: /^([\s\S]{2,})$/,
    },
  });
  const lottieStyle = {
    width: "100%",
    height: "100%",
  };
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const resetInput = () => {
    const inputs = ["name", "email", "phone", "message"];

    inputs.map((input) =>
      setFormInput((prevState) => {
        return {
          ...prevState,
          [input]: { ...prevState[input], value: "" },
        };
      })
    );
    inputs.map((input) =>
      setFormInput((prevState) => {
        return {
          ...prevState,
          [input]: { ...prevState[input], firstTouch: false },
        };
      })
    );
    inputs.map((input) =>
      setFormInput((prevState) => {
        return {
          ...prevState,
          [input]: { ...prevState[input], valid: false },
        };
      })
    );
  };

  const inputChangeHandler = (e: React.ChangeEvent<EventTarget>) => {
    if (
      !(
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
    ) {
      return;
    }

    const name = e.target.name as string;
    const inputValue = e.target.value as string;

    setFormInput((prevState) => {
      return {
        ...prevState,
        [name]: { ...prevState[name], firstTouch: true },
      };
    });

    setFormInput((prevState) => {
      return {
        ...prevState,
        [name]: { ...prevState[name], value: inputValue },
      };
    });

    if (formInput[name].pattern) {
      if (formInput[name].pattern?.test(inputValue)) {
        setFormInput((prevState) => {
          return {
            ...prevState,
            [name]: { ...prevState[name], valid: true },
          };
        });
      } else {
        setFormInput((prevState) => {
          return {
            ...prevState,
            [name]: { ...prevState[name], valid: false },
          };
        });
      }
    }
  };

  const inputBlurHandler = (e: React.ChangeEvent<EventTarget>) => {
    if (
      !(
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
    ) {
      return;
    }

    const name = e.target.name as string;

    if (!formInput[name].firstTouch) {
      console.log("asd");
      setFormInput((prevState) => {
        return {
          ...prevState,
          [name]: { ...prevState[name], firstTouch: true },
        };
      });
    }
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const timeoutHandler = (mode: string) => {
      const startTimeout = () => {
        clearTimeout(timer);
        setTimer(
          setTimeout(() => {
            setSendSuccess("no send");
          }, 7000)
        );
      };

      if (mode === "success") {
        setSendSuccess("success");
      }
      if (mode === "warning") {
        setSendSuccess("warning");
      }
      startTimeout();
    };

    const serviceId = process.env.REACT_APP_SERVICE_ID as string;
    const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY as string;
    const inputs = ["name", "email", "phone", "message"];
    if (
      !formInput.name.valid ||
      !formInput.email.valid ||
      !formInput.phone.valid ||
      !formInput.message.valid
    ) {
      timeoutHandler("warning");
      inputs.map((input) =>
        setFormInput((prevState) => {
          return {
            ...prevState,
            [input]: { ...prevState[input], firstTouch: true },
          };
        })
      );
    }
    if (
      formInput.name.valid &&
      formInput.email.valid &&
      formInput.phone.valid &&
      formInput.message.valid
    ) {
      setSendForm(true);
      const sendEmail = () => {
        console.log("in");
        emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
          (result) => {
            console.log(result.text);
            setSendForm(false);
            resetInput();
            timeoutHandler("success");
          },
          (error) => {
            console.log(error.text);
            setSendForm(false);
            timeoutHandler("warning");
          }
        );
      };
      sendEmail();
    }
  };
  return (
    <Container id="contact">
      <div className="min-h-[600px] bg-gray-300 text-dark shadow-lg h-max  max-h-none flex w-full flex-col justify-center rounded-xl overflow-hidden gap-4 p-4">
        <AnimationOnScroll
          animatePreScroll={false}
          animateOnce
          animateIn="animate__fadeInUp"
          className="text-dynamicTitle3 py-2 font-bold text-center"
        >
          Kapcsolat
        </AnimationOnScroll>
        <div className="flex flex-col tablet:flex-row gap-4">
          <AnimationOnScroll
            animatePreScroll={false}
            animateOnce
            animateIn="animate__fadeInLeft"
            className="flex flex-col w-full items-center justify-center"
          >
            <div className="flex justify-center">
              <Lottie animationData={Animation} style={lottieStyle} />
            </div>
          </AnimationOnScroll>

          <div className="w-full flex rounded-xl items-center justify-center ">
            <form
              className=" w-full h-full flex flex-col justify-center gap-4"
              onSubmit={formSubmitHandler}
              ref={form}
            >
              <AnimationOnScroll
                animatePreScroll={false}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <TextInput
                  icon={MdPerson}
                  value={formInput.name.value}
                  name="name"
                  onChange={inputChangeHandler}
                  onBlur={inputBlurHandler}
                  placeholder="Példa Jani"
                  color={`${
                    formInput.name.firstTouch
                      ? formInput.name.valid
                        ? "gray"
                        : "failure"
                      : "gray"
                  }`}
                  helperText={
                    <ErrorMessage
                      success={
                        formInput.name.firstTouch
                          ? formInput.name.valid
                            ? true
                            : false
                          : true
                      }
                      message={formInput.name.error}
                    />
                  }
                />
              </AnimationOnScroll>
              <AnimationOnScroll
                animatePreScroll={false}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <TextInput
                  icon={MdEmail}
                  value={formInput.email.value}
                  name="email"
                  onChange={inputChangeHandler}
                  onBlur={inputBlurHandler}
                  placeholder="example@example.com"
                  color={`${
                    formInput.email.firstTouch
                      ? formInput.email.valid
                        ? "gray"
                        : "failure"
                      : "gray"
                  }`}
                  helperText={
                    <ErrorMessage
                      success={
                        formInput.email.firstTouch
                          ? formInput.email.valid
                            ? true
                            : false
                          : true
                      }
                      message={formInput.email.error}
                    />
                  }
                />
              </AnimationOnScroll>
              <AnimationOnScroll
                animatePreScroll={false}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <TextInput
                  icon={MdPhone}
                  value={formInput.phone.value}
                  name="phone"
                  onChange={inputChangeHandler}
                  onBlur={inputBlurHandler}
                  placeholder="06301234567"
                  color={`${
                    formInput.phone.firstTouch
                      ? formInput.phone.valid
                        ? "gray"
                        : "failure"
                      : "gray"
                  }`}
                  helperText={
                    <ErrorMessage
                      success={
                        formInput.phone.firstTouch
                          ? formInput.phone.valid
                            ? true
                            : false
                          : true
                      }
                      message={formInput.phone.error}
                    />
                  }
                />
              </AnimationOnScroll>
              <AnimationOnScroll
                animatePreScroll={false}
                animateOnce
                animateIn="animate__fadeInUp"
              >
                <Textarea
                  value={formInput.message.value}
                  name="message"
                  onChange={inputChangeHandler}
                  onBlur={inputBlurHandler}
                  placeholder="Üzenet.."
                  rows={8}
                  className="min-h-[200px] max-h-[250px]"
                  color={`${
                    formInput.message.firstTouch
                      ? formInput.message.valid
                        ? "gray"
                        : "failure"
                      : "gray"
                  }`}
                  helperText={
                    <ErrorMessage
                      success={
                        formInput.message.firstTouch
                          ? formInput.message.valid
                            ? true
                            : false
                          : true
                      }
                      message={formInput.message.error}
                    />
                  }
                />
              </AnimationOnScroll>
              <AnimationOnScroll
                animatePreScroll={false}
                animateOnce
                animateIn="animate__fadeInUp"
                className="w-full flex flex-col gap-4"
              >
                <button
                  disabled={sendForm}
                  className="flex items-center justify-center gap-2 bg-gray-blue hover:bg-gray-blue transition-colors duration-300 rounded-lg font-bold text-light w-full py-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-palette-blue-5 disabled:hover:opacity-50"
                >
                  {sendForm && (
                    <ClipLoader loading={true} color={"white"} size={16} />
                  )}
                  Küldés
                </button>
                {sendSuccess === "warning" && (
                  <Alert
                    icon={MdWarning}
                    color={"failure"}
                    className="animate__animated animate__headShake"
                  >
                    <span>
                      <p className="flex flex-wrap items-center gap-x-2">
                        <span className="font-medium">Hoppááá!</span>
                        <span>Nem sikerült elküldeni az űrlapot!</span>
                      </p>
                    </span>
                  </Alert>
                )}
                {sendSuccess === "success" && (
                  <Alert
                    icon={MdDone}
                    color={"success"}
                    className="animate__animated animate__jello"
                  >
                    <span>
                      <p className="flex flex-wrap items-center gap-x-2">
                        <span className="font-medium">Siker!</span>
                        <span className="flex gap-2 items-center">
                          Sikeresen elküldtük az üzenetet!
                        </span>
                      </p>
                    </span>
                  </Alert>
                )}
              </AnimationOnScroll>
            </form>
          </div>
        </div>

        <ul className="w-full flex flex-col tablet:flex-row justify-center text-dynamicMedium tall:text-mobileDynamic1rem tall:text-dynamic1rem text-mobileDynamic1rem font-medium gap-4">
          <AnimationOnScroll
            animatePreScroll={false}
            animateOnce
            animateIn="animate__fadeInUp"
            className="flex items-center gap-2 p-2 rounded-lg font-bold bg-gray-200"
          >
            <span>
              <MdMap size={24} />
            </span>
            <span>
              8137 Mezőkomárom,{" "}
              <span className="whitespace-nowrap">Petőfi Sándor utca 47.</span>
            </span>
          </AnimationOnScroll>
          <AnimationOnScroll
            animatePreScroll={false}
            animateOnce
            animateIn="animate__fadeInUp"
            className="flex items-center gap-2 p-2 rounded-lg font-bold bg-gray-200"
          >
            <span>
              <MdPhone size={24} />
            </span>
            06/30 661-9438
          </AnimationOnScroll>
          <AnimationOnScroll
            animatePreScroll={false}
            animateOnce
            animateIn="animate__fadeInUp"
            className="flex items-center gap-2 p-2 rounded-lg font-bold bg-gray-200 "
          >
            <span>
              <MdEmail size={24} />
            </span>
            kissbence326@gmail.com
          </AnimationOnScroll>
        </ul>
      </div>
    </Container>
  );
};

export default Contact;

export const ErrorMessage: React.FC<{ success: boolean; message: string }> = ({
  message,
  success,
}) => {
  return (
    <>
      {!success && (
        <>
          <span className="font-medium mt-0">Hoppááá!</span> {message}
        </>
      )}
    </>
  );
};
