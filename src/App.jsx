import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Topbar from './layouts/global/Topbar';
import Dashboard from './layouts/dashboard/Dashboard';
import Team from './layouts/Team/Team';
import Contacts from './layouts/Contacts/Contacts';
import Invoices from './layouts/Invoices/Invoices';
// import Bar from './layouts/Bar/Bar';
// import Form from './layouts/Form/Form';
// import Line from './layouts/Line/Line';
// import Pie from './layouts/Pie/Pie';
// import FAQ from './layouts/FAQ/FAQ';
// import Geography from './layouts/Geography/Geography';
// import Calendar from './layouts/Calendar/Calendar';
import NavBar from './layouts/global/NavBar';

export const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <NavBar />

          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
