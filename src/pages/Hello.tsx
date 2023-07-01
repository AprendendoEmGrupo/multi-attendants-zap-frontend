import SideBar from "../components/SideBard"

function Hello() {

  return (
    <>
      <SideBar>
        <h1 data-testid="app" className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </SideBar>
    </>
  )
}

export default Hello
