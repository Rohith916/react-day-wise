import PassMessage from './PassMessage';
import FailMessage from './FailMessage';
function App(props)
{
  const ispass=props.ispass;
  if(ispass==true)
  {
    return <PassMessage />;
  }
  return <FailMessage />;
};
export default App