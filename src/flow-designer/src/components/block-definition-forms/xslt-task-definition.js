import React from 'react';
import { Form, Select, SelectItem, TextArea, TextInput, Checkbox, Button, Tabs, TabList, Tab, TabPanels, TabPanel, Column, Grid } from '@carbon/react';
import './xslt-task-definition.scss';
import ExitValidation from '../exit-validation';


export default function XsltTaskDefinitionForm({ selectedNode }) {
  return (
    <div className="activity-form">
      <Tabs>
        <TabList aria-label="List of tabs" contained>
          <Tab>Define</Tab>
          <Tab>Properties</Tab>
          <Tab>Exit Validation</Tab>
        </TabList>
        <TabPanels>
          {/* Define Form */}
          <TabPanel>
            <Form aria-label="approval form">
              <Grid>
                <Column className="col-margin" lg={16}>
                  <TextInput id="one" labelText="Name" />
                </Column>
                <Column className="col-margin" lg={16}>
                  <TextArea id="one" labelText="Description" />
                </Column>
              </Grid>
              <Grid className="buttons-wrapper-grid">
                <Column lg={8}>
                  <Button type="button" kind="secondary" className="cancel-button">
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
          {/* Properties Form */}
          <TabPanel>
            <Form aria-label="Api form">
              <Grid>
                <Column className="col-margin" lg={16}>
                  <TextArea labelText="Input*" rows={4} id="text-area-1" />
                </Column>
                <Column className="col-margin" lg={16}>
                  <Checkbox labelText="Escape Request" id="checkbox-label-1" />
                </Column>
                <Column className="col-margin" lg={16}>
                  <TextArea labelText="XSLT*" rows={4} id="text-area-1" />
                </Column>
                <Column className="col-margin" lg={16}>
                  <Select id={`select-1`} labelText="Output Format*">
                    <SelectItem value="" text="" />
                    <SelectItem value="option-1" text="Option 1" />
                    <SelectItem value="option-2" text="Option 2" />
                  </Select>
                </Column>
                <Column className="col-margin" lg={16}>
                  <TextArea labelText="Sample Output" rows={4} id="text-area-1" />
                </Column>
                <Column lg={8}>
                  <Button type="button" kind="secondary" className="cancel-button">
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
          {/* Exit Validation Form */}
          <TabPanel>
            <ExitValidation />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
