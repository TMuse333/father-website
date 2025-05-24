
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { Check } from "lucide-react";

// interface Question {
//   question: string;
//   placeholder?: string;
//   multipleChoices?: boolean;
//   choices?: string[];
//   isEmail?: boolean;
//   isPhoneNumber?: boolean;
//   required?: boolean;
//   title: string;
// }

// interface ApplicationFormState {
//   name: string;
//   email: string;
//   phone: string;
//   intent: string;
//   location: string;
//   timeline: string;
//   budget: string;
//   message: string;
// }

// const applicationQuestions: Question[] = [
//   {
//     question: "Your Name",
//     placeholder: "Enter your full name",
//     required: true,
//     title: "name",
//   },
//   {
//     question: "Your Email",
//     placeholder: "Enter your email address",
//     isEmail: true,
//     required: true,
//     title: "email",
//   },
//   {
//     question: "Your Phone Number",
//     placeholder: "Enter your phone number",
//     isPhoneNumber: true,
//     required: false,
//     title: "phone",
//   },
//   {
//     question: "What is your intent?",
//     multipleChoices: true,
//     choices: ["Buy", "Sell", "Invest", "Other"],
//     required: true,
//     title: "intent",
//   },
//   {
//     question: "Preferred Location",
//     placeholder: "Enter your preferred area (e.g., Halifax, Dartmouth)",
//     required: false,
//     title: "location",
//   },
//   {
//     question: "Your Timeline",
//     multipleChoices: true,
//     choices: ["ASAP", "1-3 months", "3-6 months", "6+ months"],
//     required: true,
//     title: "timeline",
//   },
//   {
//     question: "Your Budget",
//     placeholder: "Enter your budget (e.g., $500,000)",
//     required: false,
//     title: "budget",
//   },
//   {
//     question: "Additional Message",
//     placeholder: "Any other details or questions?",
//     required: false,
//     title: "message",
//   },
// ];

// const ApplicationForm = () => {
//   const [applicationFormState, setApplicationFormState] = useState<ApplicationFormState>({
//     name: "",
//     email: "",
//     phone: "",
//     intent: "",
//     location: "",
//     timeline: "",
//     budget: "",
//     message: "",
//   });

//   const firstInputRef = useRef<HTMLInputElement | null>(null);

//   const aspects = [
//     "Expert advice tailored to the Halifax market",
//     "Clear, honest answers—no pressure, no fluff",
//     "Access to trusted local referrals (mortgage brokers, lawyers, inspectors, etc.)",
//     "A strategic plan whether you're buying, selling, or investing",
//     "Quick response times and open communication",
//     "Support from a full-time, experienced REALTOR®️ who puts your goals first",
//   ];

//   const handleChange = (title: string, value: string) => {
//     setApplicationFormState((prevState) => ({
//       ...prevState,
//       [title]: value,
//     }));
//   };

//   const handleMultipleChoiceChange = (title: string, choice: string, isChecked: boolean) => {
//     setApplicationFormState((prevState) => {
//       const currentChoices = prevState[title]?.split(", ").filter(Boolean) || [];
//       const updatedChoices = isChecked
//         ? [...new Set([...currentChoices, choice])]
//         : currentChoices.filter((c) => c !== choice);

//       return {
//         ...prevState,
//         [title]: updatedChoices.join(", "),
//       };
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: applicationFormState.name,
//           email: applicationFormState.email,
//           phone: applicationFormState.phone,
//           intent: applicationFormState.intent,
//           location: applicationFormState.location,
//           timeline: applicationFormState.timeline,
//           budget: applicationFormState.budget,
//           message: applicationFormState.message,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to send email");
//       }

//       alert("Form submitted successfully!");
//       setApplicationFormState({
//         name: "",
//         email: "",
//         phone: "",
//         intent: "",
//         location: "",
//         timeline: "",
//         budget: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit form.");
//     }
//   };

//   useEffect(() => {
//     if (firstInputRef.current) {
//       firstInputRef.current.focus();
//     }
//   }, []);

//   return (
//     <section className="w-full">
//       <section
//         className="w-screen flex flex-col ml-auto flex-col-reverse mr-auto md:flex-row mb-8 justify-around max-w-[1200px] items-center"
//       >
//         <section className="mb-[4rem]">
//           <Image
//             src="/logo.webp"
//             alt="logo"
//             className="w-[40vw] mx-auto max-w-[445px] max-h-[550px]"
//             width={1200}
//             height={630}
//           />
//           <p className="text-black md:ml-8 md:text-left mb-4 text-center px-4 font-semibold sm:text-lg md:text-xl">
//             Here’s what you can expect when you reach out:
//           </p>
//           <ul className="text-black px-2">
//             {aspects.map((aspect, index) => (
//               <li className="mb-2 flex items-center" key={index}>
//                 <Check className="w-5 h-5 text-green-500 mr-2" />
//                 {aspect}
//               </li>
//             ))}
//           </ul>
//         </section>
//         <section className="mt-12">
//           <h3 className="mt-4 mb-[-2rem] text-black text-left pl-6 max-w-[455px] mx-auto md:pl-7 md:text-lg">
//             Fill out the following form for any questions you may have or book an appointment{" "}
//             <button
//               onClick={() =>
//                 document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })
//               }
//               className="bg-[#00bfff] p-3 rounded-xl text-white mt-4"
//             >
//               Schedule online meeting
//             </button>
//           </h3>
//           <div className="text-white w-[80vw] lg:w-[50vw] md:max-w-[400px] p-6 rounded-lg ml-auto mr-auto flex justify-center items-center">
//             <ul className="pt-5 text-black text-center w-screen mr-auto">
//               {applicationQuestions.map((question, index) => (
//                 <li key={index} className="mb-4 w-[80vw] md:max-w-[400px]">
//                   <label className="block text-left mb-2 text-lg md:text-xl">
//                     {question.question}
//                   </label>
//                   {question.multipleChoices ? (
//                     <div className="flex flex-wrap">
//                       {question.choices?.map((choice, i) => (
//                         <div key={i} className="mr-4 mb-2">
//                           <label className="flex items-center">
//                             <input
//                               type="checkbox"
//                               className="mr-2"
//                               checked={
//                                 applicationFormState[question.title]
//                                   ?.split(", ")
//                                   .includes(choice) || false
//                               }
//                               onChange={(e) =>
//                                 handleMultipleChoiceChange(
//                                   question.title,
//                                   choice,
//                                   e.target.checked
//                                 )
//                               }
//                             />
//                             <span className="text-lg md:text-xl">{choice}</span>
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <input
//                       ref={index === 0 ? firstInputRef : null}
//                       type="text"
//                       placeholder={question.placeholder}
//                       value={applicationFormState[question.title] || ""}
//                       onChange={(e) => handleChange(question.title, e.target.value)}
//                       className="w-full p-2 rounded max-w-[1500px] mr-auto ml-auto text-lg md:text-xl bg-white"
//                     />
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="bg-[#00bfff] p-3 rounded-xl ml-9 mb-8 hover:scale-[1.05]"
//           >
//             Submit form
//           </button>
//         </section>
//       </section>
//     </section>
//   );
// };

// export default ApplicationForm;

export const lol = }