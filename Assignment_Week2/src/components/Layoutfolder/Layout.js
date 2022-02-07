import MainNavigation from "./Navigation_Module";
const Design = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
};

export default Design;
