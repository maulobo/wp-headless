"use client";
export const YaEnvieButton = () => {
  const yaPage = (e) => {
    console.log(e);
  };
  return <button onClick={(e) => yaPage(e)}>Ya lo envie</button>;
};
