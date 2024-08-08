// This File is a Mock of a Database to Avoid Bigger components

import { ContactDetail } from "@/types";

export const contactInfo: ContactDetail[] = [
  {
    icon: "/icon/phone-flip.svg",
    title: "Phone",
    dato: {
      dev1: {
        name: "Eithan Leonardo (Designer)",
        info: "# 809 456 xxxx",
      },
      dev2: {
        name: "Christian Emanuel (Logic Developer)",
        info: "# 809 769 xxxx",
      },
      dev3: {
        name: "Yenzel Baez (Logic Developer & Designer )",
        info: "# 809 302 xxxx",
      },
    },
  },

  {
    icon: "/icon/envelope.svg",
    title: "Email",
    dato: {
      dev1: {
        name: "Eithan Leonardo (Designer)",
        info: "20241869@itla.edu.do",
      },
      dev2: {
        name: "Christian Emanuel (Logic Developer)",
        info: "20242016@itla.edu.do",
      },
      dev3: {
        name: "Yenzel Baez (Logic Developer & Designer )",
        info: "20241824@itla.edu.do",
      },
    },
  },

  {
    icon: "/icon/share (1).svg",
    title: "Social Medias",
    dato: {
      dev1: {
        name: "Eithan Leonardo (Designer)",
        info: "eithan22 (Github)",
        link: "https://github.com/eithan22",
      },
      dev2: {
        name: "Christian Emanuel (Logic Developer)",
        info: "CristinaP-Kuwws (Github)",
        link: "https://github.com/CristianP-Kuwws",
      },
      dev3: {
        name: "Yenzel Baez (Logic Developer & Designer )",
        info: "Erkyhanma(Github)",
        link: "https://github.com/ErkyHanma",
      },
    },
  },
];
