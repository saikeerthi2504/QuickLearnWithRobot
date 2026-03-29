import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


function VoiceAssistant() {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [welcomeDone, setWelcomeDone] = useState(false);
  const [loginStep, setLoginStep] = useState(null); // "username" or "password"

  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  // 🔊 Speak
  const speak = (text, callback) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.onend = () => callback && callback();
    window.speechSynthesis.speak(speech);
  };

  // 🎤 Setup SpeechRecognition
  const getRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript =
        event.results[event.results.length - 1][0].transcript.trim();
      setMessage(transcript);

      // Handle login
      if (loginStep === "username") {
        const usernameInput = document.getElementById("username");
        if (usernameInput) {
          // Take whatever user says as username
          const username = transcript.split(" ").slice(2).join(" ") || transcript;
          usernameInput.value = username;
          speak(`Got it. Username entered as ${username}. Now tell me your password.`, () => {
            setLoginStep("password");
          });
        }
        return;
      }

      if (loginStep === "password") {
        const passwordInput = document.getElementById("password");
        if (passwordInput) {
          const password = transcript; // use whatever user says
          passwordInput.value = password;
          speak("Logging you in now.", () => {
            const loginBtn = document.getElementById("loginBtn");
            if (loginBtn) loginBtn.click();
          });
          setLoginStep(null);
        }
        return;
      }

      // Normal commands
      respond(transcript.toLowerCase());
    };

    recognition.onend = () => {
      if (isListening) recognition.start(); // keep listening
    };

    return recognition;
  };

  const startListening = () => {
    if (!recognitionRef.current) recognitionRef.current = getRecognition();
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.warn("Recognition start error:", error);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
    setIsListening(false);
  };

  //  Commands
  const respond = (command) => {
    const navigateTo = (path, name) => {
      if (window.location.pathname !== path) navigate(path);
      speak(`Opened ${name} page successfully. Enjoy your learning!`);
    };

    if (command.includes("login") || command.includes("enter username and password")) {
      if (window.location.pathname !== "/") navigate("/"); 
      speak("Please say your username.", () => setLoginStep("username"));
    } 
    else if (command.includes("open signup") || command.includes("open sign up"))
      navigateTo("/signup", "SignUp");
    else if (command.includes("open about") || command.includes("open about us"))
      navigateTo("/aboutus", "About Us");
    else if (command.includes("open contact") || command.includes("open contact us"))
      navigateTo("/contactus", "Contact Us");
    else if (command.includes("open python")) navigateTo("/Python", "Python");
    else if (command.includes("open java")) navigateTo("/Java", "Java");
    else if (command.includes("open c")) navigateTo("/C", "C");
    else if (command.includes("open dotnet") || command.includes("open dot net"))
      navigateTo("/DotNet", "DotNet");
    else if (command.includes("open react")) navigateTo("/ReactResource", "React");
    else if (command.includes("open spring")) navigateTo("/SpringResources", "Spring");
    else if (command.includes("open oracle")) navigateTo("/Oracle", "Oracle");
    else if (command.includes("no help")) speak("Okay, I am going to sleep now.");
    else speak(`I heard: "${command}". You can say "login" or "open <page>".`);
  };

  // 🤖 Robot click
  const handleRobotClick = () => {
    if (!welcomeDone) {
      speak(
        "Hello! Welcome to QuickLearn. I am your Assistant. Login is required to continue.",
        () => {
          setWelcomeDone(true);
          startListening();
        }
      );
    } else {
      if (!isListening) startListening();
      speak("I am already active. Please tell me what you want.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{color:"white"}}>🎙️ Voice Assistant</h2>

      <div className="robot-jump">
        <img
          src="/Robot.png"
          alt="Robot"
          style={{ width: "150px", cursor: "pointer", borderRadius: "20px" }}
          onClick={handleRobotClick}
        />
      </div>

      <p style={{color:"white"}}>User said: {message}</p>
      <p style={{color:"white"}}>Robot status: {isListening ? "🟢 Listening" : "🔴 Sleeping"}</p>
    </div>
  );
}

export default VoiceAssistant;


