import Router from "next/router";

Page2.getInitialProps = ({ query }) => {
  const text = query.text || "none";
  return { text };
};

export default function Page2({ text }) {
  return (
    <div>
      <p>This is page2.</p>
      <p>{`text is ${text}`}</p>
      <butoon onClick={() => Router.push("/page1")}>page1으로 이동</butoon>
    </div>
  );
}
