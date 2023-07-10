import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { AWSLexV2Provider } from '@aws-amplify/interactions';

function App() {
  const interactionsConfig = {
    Auth: {
      identityPoolId: "us-east-1:3c40fce6-5f22-401a-a120-3ddf17da5b70",
      region: "us-east-1"
    },
    Interactions: {
      bots: {
        // LexV2 Bot
        'FinancialServicesBot': {
          name: "FinancialServicesBot",
          aliasId: "TSTALIASID",
          botId: "6OQQDP5AIF",
          localeId: "en_US",
          region: "us-east-1",
          providerName: "AWSLexV2Provider",
        },
      }
    }
  }
  
  Amplify.addPluggable(new AWSLexV2Provider());

  return (
    <div className="App">
    </div>
  );
}

export default App;
