
const Contact = () => {

    const sendWhatsAppMessage = () => {
      const phnNumber = "917617776373";
      const msg = encodeURIComponent(
        "Hello! I'm reaching out from your portfolio."
      );
      window.open(`https://wa.me/${phnNumber}?text=${msg}`, "_blank");
    };
   
  
    return (
      <div className="w-[90%] mx-auto max-w-3xl sm:mx-[150px] sm:pr-10"
      id="contact">
        <h1 className="text-2xl">Contact Me</h1>
        <hr className="w-[250px] mt-2 " />
        <button
          onClick={sendWhatsAppMessage}
          className="bg-green-500 text-white px-4 py-2 rounded my-4 cursor-pointer"
        >
          Send Me a WhatsApp Message
        </button>
      </div>
    );
  };
  
  export default Contact;
  