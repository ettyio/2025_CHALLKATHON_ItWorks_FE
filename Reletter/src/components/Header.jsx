import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/main");
  };
  const handleMyClick = () => {
    navigate("/mypage");
  };
  return (
    <header
      style={{
        height: "65px",
        backgroundColor: "#fdf2f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "30px",
          height: "30px",
          gap: "8px",
        }}
        onClick={handleLogoClick}
      >
        <img
          src="/reletter_logo.png"
          alt="Reletter 로고"
          style={{ height: "45px" }}
        />
        <span
          style={{
            marginTop: "15px",
            fontWeight: "800",
            fontSize: "35px",
            color: "#9d174d",
          }}
        >
          Reletter
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <button style={roundedButtonStyle} onClick={handleMyClick}>
          마이페이지
        </button>
      </div>
    </header>
  );
}

const roundedButtonStyle = {
  backgroundColor: "#ffffff",
  border: "1.5px solid 	#eab5c5",
  borderRadius: "12px",
  padding: "6px 14px",
  fontSize: "14px",
  color: "#9d174d",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
};

export default Header;
