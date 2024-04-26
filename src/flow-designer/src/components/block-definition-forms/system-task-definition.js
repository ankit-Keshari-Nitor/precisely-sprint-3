import React, { useState } from 'react';
import { Form, TextArea, TextInput, Button, Modal, Tabs, TabList, Tab, TabPanels, TabPanel, Column, Grid } from '@carbon/react';
import './system-task-definition.scss';
import ExitValidation from '../exit-validation';

export default function SystemTaskDefinitionForm({ selectedNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="activity-form">
      <Tabs>
        <TabList aria-label="List of tabs" contained>
          <Tab>Define</Tab>
          <Tab>Exit Validation</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Form aria-label="approval form">
              <Grid className="define-grid">
                <Column className="col-margin" lg={16}>
                  <TextInput id="one" labelText="Name*" />
                </Column>
                <Column className="col-margin" lg={16}>
                  <TextArea id="one" labelText="Description" />
                </Column>
              </Grid>
              <Grid className="buttons-wrapper-grid">
                <Column lg={8}>
                  <Button type="button" kind="secondary" className="cancel-button" onClick={() => setOpen(true)}>
                    Cancel
                  </Button>
                </Column>
                <Column lg={8}>
                  <Button type="submit" kind="secondary" className="save-button">
                    Save
                  </Button>
                </Column>
              </Grid>
            </Form>
          </TabPanel>
          <TabPanel>
            <ExitValidation />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Modal open={open} onRequestClose={() => setOpen(false)} isFullWidth modalHeading="Confirmation" primaryButtonText="Delete" secondaryButtonText="Cancel">
        Do you want to delete System-01?
      </Modal>
    </div>
  );
}
