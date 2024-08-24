import fotoLaurea from "./images/fotoLaurea.JPG";

const Intro = () => {
  return (
    <div>
      <h3 className="text-black text mt-3 text-center ms-3 fs-4 fw-bolder fst-italic">
        Angela Prestano
      </h3>
      <div className="d-flex justify-content-center mt-4">
        <img
          src={fotoLaurea}
          width={"230px"}
          alt="Foto Laurea"
          className="image"
        ></img>
      </div>
      <p className="ms-3 mt-3 text-center">
        Sono una Junior full stack developer con tanta voglia di imparare e
        crescere, sempre pronta ad imparare nuove tecnologie e skills per stare
        sempre al passo, poichè ad oggi <br></br>il mondo tech è in continua
        evoluzione. Do tutta me stessa per portare a termine i lavori con
        dedizione e passione e prediligo molto il lavoro in team <br></br>{" "}
        poichè si ha sempre la possibilità di confronto e sopratutto si ha modo
        di comunicare sempre con i colleghi.
        <br />
      </p>
      <h2 className="tech fs-4 ms-3 fw-bolder mt-5 text-center ">
        Tech Skills:
      </h2>
      <h5 className="text-center ms-4 mt-5 fst-italic">Front-end</h5>
      <div className="d-flex flex-wrap justify-content-center ms-4 mt-5 ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
          width={"90px"}
          height={"90px"}
        ></img>

        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
          width={"90px"}
          height={"90px"}
          className="ms-4"
        ></img>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgh0cmaLPqUaZd6iuo7D_iaOeLYb1QUdjMiA&s"
          width={"90px"}
          height={"90px"}
          className="ms-5"
        ></img>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
          width={"90px"}
          height={"90px"}
          className="ms-5"
        ></img>
        <img
          src="data:image/png;base64,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"
          width={"90px"}
          height={"90px"}
          className="ms-5"
        ></img>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAADZNJREFUeF7tnU166yoMhu1u7dwzaLuepmtosp62g6ZbO9xHdpw6rm19AgGC0EkHwaCfFyEwmL5rf80CESzQR6izVdks0DWwGgRRLNDAimLWVmkD68LA4fnsOkfmcEIqXHf8+NvsuLDaXRvk9enbdb3rnJSlDfSOH//dtT3nZrk7Qxyev/VI2oxtfXf8+HN3tr1LsA5PZ6W4JB0pXXf8vL+hsvpelQ2oOX+EdH9fuVi1YJkAahHcKJc7fd5HHlYdWIenL9eZX56rP3pVBdbh8ezMM3WJYn3fdW/v9UavKsAqI0r9TvrJ+G+VLlEUD5Y2VJQH9WCiTYuq7h+V91lYHUGrFa6iwdKAynU0etK6U/iw5DsU1whXsWC9PJ2HFzC+f67vu9N7nEVMWtEnYKV/GnBL24xVPsQ3sWRi6z08frluGH6kf2lXxH0AqwUuH+9Ivala3ne4yeWww/PX5eU2aAZXx0p9eWBJX830XXc0MK2XLtjm6ggg/myxosAq3Tmly8/SNCtQDFi1OEWiR8lRqwiwpMsK1h2CwkUzy1OhmwjNgzXu7MSDsHWoSBOZTmlnsril90vaB0uQrJcA1eQONGpR+ZL0mvQzDZZkt2eJxq8ZLttgwdGq3G0oKFyldRyzYKEGpxX4Y6RXM1r5xl49kolJSXCZBEuS3JZk7C3A0E5Ukq42wQKHQHoLfTKwqq4R2RC4StrabA4sxMCTI0vqwRx8r8/fzgEHHEvRuViwSjEwB9T8d7RTlaB7mWC5rjtWeNoFTeQbWJLuOqxIY6eUSzCsUPVrcSRqlaC/qYiFGJXe7pwUthH7Oj72c+iM2DpcZsBCoCr19YYERnQjYwMLtGoD68dQiC0aWIpgWTcmqCpbDAHLevQ2MRRiSXuZ20dYijYKIHBZ7mgmwEKOctV49m7/HSL/2aUGFtNtS++dvlFpH6xvx3220nJnMxGxGli/EXt5/HLj0f39P6tRi5ec0yzw99enM/+GzMgRrkBVxY+X3OGKAKv2T/5sEdfAEvfFutZsAtTfffTl8UyfmNj9a0NhpdPqWFBRvVCaYPSwRdahEAn1pW89DgEP2u1gdKdHXrDAr8ZYDfch0KDPIp3Pon3yggVsQY5tNIoKlq8s4cCyutvj7sAikOgLfvS3dcA6NsxotJrKDVtpSOZB4N9SW5OXpLwrsLjeP3e45YMLL0/frp8B1sBadFXE0VpGQ9paiyRa7UujFFqeIDsZvLcnW8RCHa3hWLStLWdqyICCUku5fGABM0KNFfdQqKaspubt0DFgzgcWMCOkRDVkxvb69OW0rqqYv9Ck/Ibqfbjk0zQZeDM4HMUABq0zG1jIHqxQsDSiFWrIvXIEnqNLCSo5tY3YJBtYB7rdlP2iWljEsgLWPnR1XnuSDywgx6olYiE9fCpjefOeVA9JebWyWDTxj1joMSo1hSJVVGr+li9iRU7eMXAj0RCp2pKWPaoFy+e6kUg8KFdLLqNIHn6plLJgN9VVCxZpWWPUmnvP8jDZwIrZbRPVbRGwbGBhuyP9k3f9iLXYVdA/DNj0iwvk6G0BfzokDnGWAMsGFjZMhYGlBRcdw3oL/IDu6/PZ/RveA8Q3uQXA4mu50TlTRKwBLPCbW3sxJFaiPCwS98A6sWeAy7kmlg2s5Z6iNdtp7Y7EouO692JBtdbaKCdpreuWlDrMF3o9+0PYY9BygPKlkFLAcjhksipy9EvmgfC0QtKebteQtAwuB2g7l12R78eE/M3IrVvaUUzbnlsuvzuw5oa4RjDaUd7bfxmsF8XifxLqrsESBlgzxaVD+pbgMaNXA8sMLnJBsJn1fr2x4FIH65qUAyd0oZ4H1CN3SV1PQHbcUTkGXKpgzRVErp1FDRJD8brQGrVB7ZliaFQDa00pBAjEGEg9NYLio9Pr49nR5VU+f5oLqp4i3Iq9BQcCRAPLBwH+GfSLgMuatOAKBosDg4OLe54U5+rgzXy/JRD7Lq1Dt5CdPv8GsRH0MC80v9oLHapoCXxQz/CbPfK+2xPKGyweqrFZLtqgSnP1BFn+Dh7Gjtv9il3e5zq9wEKhQsBCZzMNLB36Jb4bW/SLXGKw5ILxUQuqs/BLxXWw0KkFsvdNU3K4RGD5hFMk0iCKas1WdFxTfi2IzedaIn6cl4fBQu/R8xUGUVSqXPnuj6sBYvNJAuneOAgs6COrMxv4AIAo6VNvXNfo1z58yGTYOP/j0pAPo3ASInb3CRYgWPyFQVPjvs5H4LX8lT3OgdzviINj6Y+0/YO5607AXjUWLDoEgJ468YUKnRmis0zOiZZ+f3n8dj3texf+hdh6rSkJXEjbu2BpN8bZDmkPUYprx8rviL5bsmqsji/rlsjD+WETLFGyrrQyjirGKWUFnD05NHaDatsBOodwUYqbpW+DBX20g3JMbMxFnY3ApW1QVDbNcoiebHvKh02GlERwXG7PD6tgoeRy1LKGWSmAGrxkuFAdEfvFOJyKyrfX9ipYaMUxnHt4/nIdsKEoRtuIIzXKoPZF2orRuTUmU7/AQpWO6VhMhvgnTRDHSsugo4Gk3hi+wHwwSrnW/m+w6HoNZvYrXYWVGEnSW3xfkErl0SxfClijH77Gq1aYPwwsIGmP0UN8p74pZOEMK/ldNNsGK45pAzRyLWW4wRGpJNaY/hssrLeUFrUQG4M8XYtFBevxDH0qPwwspfUq1HCoE2IaFpUVLcce8UcrmpWLrT/mh9utNdeIhaxfxJja7tkR36YzJoUxX9Z6+HvzEcxReIuxwUIXc+dy/IDF5FaphkDfXGvLDbGNjrv/p6QqWH2X5MYLRGYvsLamlT6GlTyDR62tWuW7HyXy+ZT1PZq11laqjoNOOiZ5hoiFDIOpFFgzHtJbWAdHeP3BtrlT4GV202tIPSn9gvjhFixmGIy1Dwg1aHjUGltK6QREN8RRe/Wk1geRVwSWhSk9ohTizNTO2JMpRKccemBH9cbUYxwKmYiVQwntJH5enwl9oEuq1rDM+yqLY2UaGYoAS2sonNxkAizgDccNVolmf1zUh8FCjrjndgSiDGeQ5e85dZIk7jnl9J1Ikcw957Rc61dzpTgZpVDlTOQlK+/WoJrszPljAIt7225BOU6RosACh0C6d9rKl5vF+W7fd2zEyg0WunVDClcOvSQdJId8qA05PYar2LlCFhTkZEQNMpUbPr2d+OJvqQ4W7L5lV0SXMsASbPBHIUvtOMQZo+x5lxMQ+yG63ClYad8fIo6wtBTCwcXpQxO+MsACt8hyBsnhPPTl7Rir7N+OQXKyK/C0oZmb/qYeMrbgYJUBqUqpj+TzBDmXQEDTXYtxEWvoJNxygyWFEYU4I6UESyJvSrk4G3G/Ix2mL2HlXWuxNKXzJFBZ6rwcVPQ7pxvthiniXaF4gW7xgPZnADjjc4ZfPp8SeE525HdEvyLBmpTHFOy7t48//OE4xKJAGWTT5Lya0qBCItY0EWFDWwnKD5d5/xtD8PHzv2Qg3QzTHuttJdj2NhXhj+UN7wpRAkszABBcVIsg0fOmQWNbpVFjIPv1G1ioNZlyYqgMbpNGTYHoegULOTdGH1w9vafLVVBFc5dDDF16sn7NaQWnouFzhaVNiWMD57vrouSUAulE08EbEViW9wjFBmlev2QHaOkzwNvEHfl69uwwBT2MvTKx/+Y9NmBIr12ToeRIhU7w5qOa2a/NxAbEp35fqLrC7wGSHGaZOtAtWAY+uubj8NjPeAM13J3VdaePPOtqWnZB9Z9H5UXE4he/xlXVtKvZWgaS1uObS13bMXJkS6q3PK8a9/wcZ7tyvT4VOTacdrNciHF8nkV76Vbdveu7t8+yl2eQDQqT/ssccuXjtljUGiJXhr3jPpBIngkFqqZlGYktWLCGGQCQa22RKnGipbISI+7JXfrsb9JNYo81nTe+845HrRp6qMSIm0NfIduKkc4sscdWR9rcBSCpfBC2wERVkkPsOaSmlEDqdzFYw5AIntqdG936UDDul/p3ObqA9N/9Mtb1lWgo8Tf3zTR235KksUkJi2s3WtHpx1H1zIp93ntyHQoAS5ZvLXsIJ4CkR/mU9ekYXDu5deLkk/zuYx9EfxYsn1nCL8UohFEOlmAFmgxFSsnvLOXdoXHub+2dbAq7LLVDTmetWQSVFQbLN+dadZe73HP4+VfU/pbrpfvMeYQWJZQmJtxwnOKNhk+EmqyBQnWZy8nMjO2CkNU5CRIjysglmWdReu/55A6l3terRHp520uryXe1eEWM1+dvB99AHuLZTM9yMx6pWOGOvW2RbN/TGseQYtBVNw/D/2n81+ygkig1l9ILLJW8S+qdROV9Dbkmns9sK5GaUDMhtggCa8i7wH3QkCZZCg2fCVPf2iLZw5RF7b1Ge9cd38Py32CwJvli5V6xjE7DyUlp8lBLtNKcPKiBdQXs+Ww2/cqxcFvCcKgJ1MSBOljz3qudtEqjl8a6k7TNrfIDYFPCrVVpaD0R75+MCtYNZIKtOL72sgTSng5Dhxsg05y/4VYLScrRVpKBtRSIkv7LMg0q66wcTa0fuv7BJf9IrYew7CNxQaOBjiYoad9tZgOLtfYdF5g+bHZ5EwZZYlrbypFHrgnYwILc1gpJLdDAklqslYcs0MCCzNQKSS3QwJJarJWHLPA/iisvR4Fz+IYAAAAASUVORK5CYIIA"
          width={"90px"}
          height={"90px"}
          className="ms-5"
        ></img>
        <img
          src="https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
          width={"90px"}
          height={"90px"}
          className="ms-5"
        ></img>
        <img
          src="https://noemipusceddu.netlify.app/assets/vscode-odvdStlw.png"
          width={"90px"}
          height={"90px"}
          className="ms-5"
        ></img>
        <img
          src="data:image/png;base64,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"
          width={"90px"}
          height={"90px"}
          className="ms-5"
        ></img>
      </div>
      <div className="mb-4 ">
        <h5 className="mt-5 ms-4 text-center fst-italic">Back-end</h5>
        <div className="d-flex d-flex justify-content-center mt-5">
          <img
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
            width={"90px"}
            height={"90px"}
            className="ms-5"
          ></img>
          <img
            src="https://noemipusceddu.netlify.app/assets/postgres-DbicGTFr.png"
            width={"90px"}
            height={"90px"}
            className="ms-5"
          ></img>
          <img
            src="https://www.svgrepo.com/show/354202/postman-icon.svg"
            height={"90px"}
            className="ms-5"
          ></img>
          <img
            src="data:image/png;base64,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"
            height={"90px"}
            className="ms-5"
          ></img>
          <img
            src="https://noemipusceddu.netlify.app/assets/intellij-BWS__E_8.png"
            height={"90px"}
            className="ms-5"
          ></img>
        </div>
        <h5 className="mt-5 ms-4 text-center fst-italic">
          Strumenti di utilizzo
        </h5>
        <div className="mt-4 d-flex justify-content-center">
          <img
            src="data:image/png;base64,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"
            width={"90px"}
            height={"90px"}
            className="ms-4"
          ></img>
          <img
            src="data:image/png;base64,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"
            width={"90px"}
            height={"90px"}
            className="ms-5"
          ></img>
        </div>
        <div>
          <h4 className="contact fw-bolder text-center mt-5 fst-italic">
            Contatti:
          </h4>
          <h6 className="text-center mt-3">angiprestano99@gmail.com</h6>
          <div className="d-flex flex-column text-center">
            <a href="https://www.linkedin.com/in/angela-prestano-full-stack-developer/">
              Linkedin
            </a>
            <a href="https://github.com/Angiprestano?tab=repositories">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
