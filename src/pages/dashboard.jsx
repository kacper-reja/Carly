import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

function Dashboard() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Assets</Tab>
          <Tab>Bookings</Tab>
        </TabList>
        <input type="text" placeholder="search" />
        <button>Add</button>
        <TabPanel>Assets</TabPanel>
        <TabPanel>Bookings</TabPanel>
      </Tabs>
    </div>
  )
}

export default Dashboard
