import React from "react";

import Employee from "@/components/Employee";
import Role from "@/components/Role";

import styles from "./Experience.module.css";

export default function ExperiencePage() {
  return (
    <div className={styles.wrapper}>

      {/* <Employee company={"Arapuca"}> */}
      {/*   <Role */}
      {/*     role={"Founder"} */}
      {/*     start={"Agosto 2022"} */}
      {/*     end={"present"} */}
      {/*   /> */}
      {/* </Employee> */}

      <Employee company={"Globo"}>
        <Role
          role={"Senior Data Engineer"}
          start={"Nov 2023"}
          end={"present"}
        />
        <Role
          role={"Data Engineer"}
          start={"Aug 2022"}
          end={"Nov 2023"}
        />
      </Employee>

      <Employee company={"EBANX"}>
        <Role
          role={"Analytics Engineer"}
          start={"Apr 2021"}
          end={"Jun 2022"}
        />
      </Employee>

      <Employee company={"Juno"}>
        <Role
          role={"Risk Analyst"}
          start={"Jan 2021"}
          end={"Apr 2021"}
        />
        <Role
          role={"Junior Risk Analyst"}
          start={"Feb 2020"}
          end={"Jan 2021"}
        />
        <Role
          role={"Risk Analyst Assistant"}
          start={"Apr 2019"}
          end={"Feb 2020"}
        />
      </Employee>
    </div>
  );
}

