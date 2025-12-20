import React from "react";
import { AniFormInput } from "./ani-components/AniFormInput";

export const Forms = () => {
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("admin");
  const [gender, setGender] = React.useState("");
  const [agree, setAgree] = React.useState(false);

  return (
    <>
      <h1 className="text-3xl" id="forms">Forms</h1>
      <AniFormInput id="Text" name="Text" label="Text Disabled" type="email" value={Text} disabled />
      <AniFormInput id="email" name="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <AniFormInput id="role" name="role" label="Role" type="select" value={role}
        onChange={(e) => setRole(e.target.value)}
        options={[
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" },
        ]}
      />
      <AniFormInput id="gender" name="gender" label="Radio" type="radio" value={gender}
        onChange={(e) => setGender(e.target.value)}
        options={[
          { label: "Male", value: "m" },
          { label: "Female", value: "f" },
        ]}
      />
      <AniFormInput id="agree" name="agree" type="checkbox" label="CheckBox" checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />
      <AniFormInput id="date" name="date" type="date" label="Date Picker" />
      <AniFormInput id="time" name="time" type="time" label="Time Picker" />
      <AniFormInput id="ssn" name="ssn" type="ssn" label="SSN" />
      <AniFormInput id="file" name="file" type="file" label="file" />
    </>
  );
};
