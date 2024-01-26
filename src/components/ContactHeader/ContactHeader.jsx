import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
        YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY
        PHONE, EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
    </div>
  );
};

export default ContactHeader;
