import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import WidgetBot from "@widgetbot/react-embed";
import Modal from "react-modal";
import Room from "../room";
import FAQ from "../faq";
import Agenda from "../agenda";
import Speakers from "../speakers";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4202");

export default function Main() {
  const [faqModalIsOpen, setFaqIsOpen] = React.useState(false);
  const [agendaModalIsOpen, setAgendaIsOpen] = React.useState(false);
  const [speakersModalIsOpen, setSpeakerIsOpen] = React.useState(false);
  let subtitle;

  const [isConnected, setIsConnected] = useState(socket.connected);
  // const [connectionCount, setConnectionCount] = useState(0);
  // const [streamData,.stagessetstreamData].stages= useState({
  //   idn: {
  //     stage: "idn",
  //     active: true,
  //     presenter: "Philip Ellis",
  //     startTime: "2023-03-16T19:00:00.000Z",
  //     endTime: "2023-03-16T19:30:00.000Z",
  //     topic: "SaaS Connectivity, Create your first connector",
  //   },
  //   iiq: {
  //     stage: "iiq",
  //     active: true,
  //     presenter: "Colin McKibben",
  //     startTime: "2023-03-16T13:00:00.000Z",
  //     endTime: "2023-03-16T19:00:00.000Z",
  //     topic: "How to migrate from IIQ to IDN",
  //   },
  //   main: {
  //     stage: "main",
  //     active: true,
  //     presenter: "Jordan Violet",
  //     startTime: "2023-03-16T14:00:00.000Z",
  //     endTime: "2023-03-16T14:30:00.000Z",
  //     topic: "Welcome to Developer Days 2022",
  //   },
  // });

  const [streamData, setStreamData] = useState({
    connectionCounts: { total: 12, idn: 2, iiq: 3 },
    stages: {
      idn: {
        stage: "idn",
        active: true,
        presenter: "Philip Ellis",
        startTime: "2023-03-16T19:00:00.000Z",
        endTime: "2023-03-16T19:30:00.000Z",
        topic: "SaaS Connectivity, Create your first connector",
      },
      iiq: {
        stage: "iiq",
        active: true,
        presenter: "Colin McKibben",
        startTime: "2023-03-16T13:00:00.000Z",
        endTime: "2023-03-16T19:00:00.000Z",
        topic: "How to migrate from IIQ to IDN",
      },
      // main: {
      //   stage: "main",
      //   active: true,
      //   presenter: "Jordan Violet",
      //   startTime: "2023-03-16T14:00:00.000Z",
      //   endTime: "2023-03-16T14:30:00.000Z",
      //   topic: "Welcome to Developer Days 2022",
      // },
    },
    videoSource: {
      idn: {
        playbackId: "8eovb9oQzltDEG02e7MwE1aBwLj00HBeKm3VbsZbvcWB4",
        env_key: "j4iije0sv1ih8shgurfp3ldkq",
      },
      iiq: {
        playbackId: "DN6LQtQ5fi016Xliw4lurST62ZAmVyDHqdFPisrY00WDI",
        env_key: "6i0s80sskn2ri0661uqi5oesq",
      },
      // backup: { playbackId: "", env_key: "" },
    },
  });
  const [stage, setStage] = useState({
    stage: "idn",
    videoSource: "https://www.youtube.com/embed/dVGhO6vSCT8",
  });

  //setting socket here
  useEffect(() => {
    console.log("Creating effect");
    socket.on("connect", () => {
      console.log("Socket Connect");
      socket.emit("register");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("stream", (data) => {
      console.log("incoming Data");
      setStreamData(data);
      console.log(data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("stream");
    };
  }, []);

  const streamCountFormatter = Intl.NumberFormat("en", { notation: "compact" });

  // setting stage here
  function changeToMainStage() {
    setStage({
      stage: "main",
      videoSource: {
        playbackId: "https://www.youtube.com/embed/dVGhO6vSCT8",
        envKey: "",
      },
    });
  }
  function changeToIDNStage() {
    setStage({
      stage: "idn",
      videoSource: "https://www.youtube.com/embed/N-JG8xjpKaI",
    });
  }
  function changeToIIQStage() {
    setStage({
      stage: "iiq",
      videoSource: "https://www.youtube.com/embed/dVGhO6vSCT8",
    });
  }

  Modal.setAppElement("#__docusaurus");

  function openFaqModal() {
    setFaqIsOpen(true);
  }

  function closeFaqModal() {
    setFaqIsOpen(false);
  }

  function openAgendaModal() {
    setAgendaIsOpen(true);
  }

  function closeAgendaModal() {
    setAgendaIsOpen(false);
  }

  function openSpeakersModal() {
    setSpeakerIsOpen(true);
  }

  function closeSpeakersModal() {
    setSpeakerIsOpen(false);
  }
  const mainSelectedClass =
    stage.stage === "main" ? styles.stageButtonActive : "";
  const iiqSelectedClass =
    stage.stage === "iiq" ? styles.stageButtonActive : "";
  const idnSelectedClass =
    stage.stage === "idn" ? styles.stageButtonActive : "";
  return (
    <div>
      <div className="px-4 py-6 my-2 flex flex-col md:flex-row justify-between gap-4">
        <div className="">
          <div className="flex flex-row">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              className="rounded-full w-12 h-12"
            ></img>
            <div className={`${styles.headerText} my-auto pl-4`}>
              {streamData?.stages[stage.stage].topic}
            </div>
          </div>
          <div className={styles.timeText}>
            {new Date(
              streamData?.stages[stage.stage].startTime
            ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) +
              " - " +
              new Date(
                streamData?.stages[stage.stage].endTime
              ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </div>
          <div className={styles.speakerText}>
            {streamData?.stages[stage.stage].presenter}
          </div>
          {/* <p className="whitespace-nowrap">
            {streamCountFormatter.format(streamData.connectionCounts.total) +
              " tuned in"}
          </p> */}
        </div>
        <div>
          <div className="flex flex-row gap-2 w-full md:justify-between">
            <div
              className="border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] text-center font-bold py-2 px-4 rounded"
              onClick={openAgendaModal}
            >
              Agenda
            </div>
            <div
              className="border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] text-center font-bold py-2 px-4 rounded"
              onClick={openSpeakersModal}
            >
              Speakers
            </div>
            <div
              className="border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] text-center font-bold py-2 px-4 rounded"
              onClick={openFaqModal}
            >
              FAQ
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-start px-[0.5%] w-full gap-[0.5%]">
        <button
          className={`${styles.stageButton} ${idnSelectedClass} px-4 min-w-[140px]`}
          onClick={changeToIDNStage}
        >
          <p className="text-lg">IdentityNow</p>
        </button>

        <button
          className={`${styles.stageButton} ${iiqSelectedClass} px-4 min-w-[140px]`}
          onClick={changeToIIQStage}
        >
          <p className="text-lg text-center">IdentityIQ</p>
        </button>
      </div>

      <Room videoSource={streamData.videoSource[stage.stage]}></Room>

      <Modal
        isOpen={faqModalIsOpen}
        onRequestClose={closeFaqModal}
        className={styles.modal}
        contentLabel="FAQ"
      >
        <FAQ
          description={
            "if you stil can't find what you are looking for, reach out to us on our discussion board"
          }
          title={"Frequently Asked Questions"}
          image={"/homepage/discuss.png"}
        ></FAQ>
        <button className={styles.modalButton} onClick={closeFaqModal}>
          Close
        </button>
      </Modal>

      <Modal
        isOpen={agendaModalIsOpen}
        onRequestClose={closeAgendaModal}
        className={styles.modal}
        contentLabel="Agenda"
      >
        <Agenda
          description={
            "The agenda for the 3 conference days are below. If you have any questions about the agenda, reach out via the discussion forum."
          }
          title={"Agenda"}
          image={"/homepage/team.png"}
        ></Agenda>
        <button className={styles.modalButton} onClick={closeAgendaModal}>
          Close
        </button>
      </Modal>

      <Modal
        isOpen={speakersModalIsOpen}
        onRequestClose={closeSpeakersModal}
        className={styles.modal}
        contentLabel="Speakers"
      >
        <Speakers
          description={
            "Here are the awesome speakers we have lined up for Developer Days 2022"
          }
          title={"Speakers"}
          image={"/homepage/person-head.png"}
        ></Speakers>
        <button className={styles.modalButton} onClick={closeSpeakersModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}
