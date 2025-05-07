const Footer = (props) => {
  return (
    <footer
    
     
      style={{ backgroundColor: "#964B00",
      zIndex: "1",
      position: "sticky",
      bottom: "0",
      clear: "both",
      marginTop: "auto",
      paddingBottom: "10px",
      paddingTop: "5px",
      textAlign: "center",
      width: "100%",
      }}
    >
      {/* in line css in jsx need double curly brackets*/}
      <p>This website was created May2025</p>
    </footer>
  );
};

export default Footer;
