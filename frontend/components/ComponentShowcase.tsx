import React, { useState } from 'react';
import { Button, Toggle, Tab, TabGroup, Input, Card, Badge, Checkbox, VisibilityToggle, PlusButton, EditableField, Calendar, TimePicker, RowInfoTile } from '../../../../src/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './ComponentShowcase.css';

export const ComponentShowcase: React.FC = () => {
  const [toggleStates, setToggleStates] = useState({
    toggle1: false,
    toggle2: true,
    toggle3: false,
  });

  const [checkboxStates, setCheckboxStates] = useState({
    checkbox1: true,
    checkbox2: false,
    checkbox3: true,
    checkbox4: false,
  });

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [activeShowcaseTab, setActiveShowcaseTab] = useState('buttons');
  const [selectedTiles, setSelectedTiles] = useState<Record<string, boolean>>({});
  const [calendarWeeklyValue, setCalendarWeeklyValue] = useState('');
  const [calendarMonthlyValue, setCalendarMonthlyValue] = useState('');
  const [timePickerValue, setTimePickerValue] = useState('03:00');

  const handleToggleChange = (key: string) => (checked: boolean) => {
    setToggleStates(prev => ({ ...prev, [key]: checked }));
  };

  const handleCheckboxChange = (key: string) => (checked: boolean) => {
    setCheckboxStates(prev => ({ ...prev, [key]: checked }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0 && value.length < 3) {
      setInputError('Input must be at least 3 characters');
    } else {
      setInputError('');
    }
  };

  return (
    <div className="component-showcase">
      <TabGroup>
        <Tab
          active={activeShowcaseTab === 'buttons'}
          onClick={() => setActiveShowcaseTab('buttons')}
        >
          Buttons
        </Tab>
        <Tab
          active={activeShowcaseTab === 'toggles'}
          onClick={() => setActiveShowcaseTab('toggles')}
        >
          Toggles
        </Tab>
        <Tab
          active={activeShowcaseTab === 'tabs'}
          onClick={() => setActiveShowcaseTab('tabs')}
        >
          Tabs
        </Tab>
        <Tab
          active={activeShowcaseTab === 'inputs'}
          onClick={() => setActiveShowcaseTab('inputs')}
        >
          Inputs
        </Tab>
        <Tab
          active={activeShowcaseTab === 'cards'}
          onClick={() => setActiveShowcaseTab('cards')}
        >
          Cards
        </Tab>
        <Tab
          active={activeShowcaseTab === 'badges'}
          onClick={() => setActiveShowcaseTab('badges')}
        >
          Badges
        </Tab>
        <Tab
          active={activeShowcaseTab === 'checkboxes'}
          onClick={() => setActiveShowcaseTab('checkboxes')}
        >
          Checkboxes
        </Tab>
        <Tab
          active={activeShowcaseTab === 'utilities'}
          onClick={() => setActiveShowcaseTab('utilities')}
        >
          Utilities
        </Tab>
        <Tab
          active={activeShowcaseTab === 'calendar-time'}
          onClick={() => setActiveShowcaseTab('calendar-time')}
        >
          Calendar & Time
        </Tab>
        <Tab
          active={activeShowcaseTab === 'row-info-tile'}
          onClick={() => setActiveShowcaseTab('row-info-tile')}
        >
          Row Info Tile
        </Tab>
      </TabGroup>

      <div className="showcase-content">
        {activeShowcaseTab === 'buttons' && (
          <div className="showcase-section">
            <h3>Button Variants</h3>
            <div className="showcase-grid">
              <div className="showcase-item">
                <h4>Primary</h4>
                <Button variant="primary">Primary Button</Button>
                <Button variant="primary" icon={<FontAwesomeIcon icon={faHome} />}>
                  With Icon
                </Button>
                <Button variant="primary" loading>
                  Loading
                </Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
              </div>

              <div className="showcase-item">
                <h4>Secondary</h4>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="secondary" icon={<FontAwesomeIcon icon={faUser} />} iconPosition="right">
                  Icon Right
                </Button>
                <Button variant="secondary" disabled>
                  Disabled
                </Button>
              </div>

              <div className="showcase-item">
                <h4>Danger</h4>
                <Button variant="danger">Danger Button</Button>
                <Button variant="danger" disabled>
                  Disabled
                </Button>
              </div>

              <div className="showcase-item">
                <h4>Warning</h4>
                <Button variant="warning">Warning Button</Button>
                <Button variant="warning" disabled>
                  Disabled
                </Button>
              </div>

              <div className="showcase-item">
                <h4>Success</h4>
                <Button variant="success">Success Button</Button>
                <Button variant="success" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            <h3>Button Sizes</h3>
            <div className="showcase-row">
              <Button variant="primary" size="small">Small</Button>
              <Button variant="primary" size="medium">Medium</Button>
              <Button variant="primary" size="large">Large</Button>
            </div>
          </div>
        )}

        {activeShowcaseTab === 'toggles' && (
          <div className="showcase-section">
            <h3>Toggle Switches</h3>
            <div className="showcase-grid">
              <div className="showcase-item">
                <h4>Small</h4>
                <Toggle
                  size="small"
                  checked={toggleStates.toggle1}
                  onChange={handleToggleChange('toggle1')}
                  label="Small Toggle"
                />
              </div>

              <div className="showcase-item">
                <h4>Medium (Default)</h4>
                <Toggle
                  size="medium"
                  checked={toggleStates.toggle2}
                  onChange={handleToggleChange('toggle2')}
                  label="Medium Toggle"
                />
              </div>

              <div className="showcase-item">
                <h4>Large</h4>
                <Toggle
                  size="large"
                  checked={toggleStates.toggle3}
                  onChange={handleToggleChange('toggle3')}
                  label="Large Toggle"
                />
              </div>

              <div className="showcase-item">
                <h4>Without Label</h4>
                <Toggle
                  checked={toggleStates.toggle1}
                  onChange={handleToggleChange('toggle1')}
                  aria-label="Toggle without label"
                />
              </div>

              <div className="showcase-item">
                <h4>Disabled</h4>
                <Toggle
                  checked={false}
                  onChange={() => {}}
                  label="Disabled Off"
                  disabled
                />
                <Toggle
                  checked={true}
                  onChange={() => {}}
                  label="Disabled On"
                  disabled
                />
              </div>
            </div>
          </div>
        )}

        {activeShowcaseTab === 'tabs' && (
          <div className="showcase-section">
            <h3>Tab Navigation</h3>
            <div className="showcase-item">
              <h4>Basic Tabs</h4>
              <TabGroup>
                <Tab active icon={<FontAwesomeIcon icon={faHome} />}>Home</Tab>
                <Tab>Profile</Tab>
                <Tab active={false}>Settings</Tab>
                <Tab disabled>Disabled</Tab>
              </TabGroup>
            </div>

            <div className="showcase-item">
              <h4>Tab States</h4>
              <TabGroup>
                <Tab active>Active Tab</Tab>
                <Tab>Inactive Tab</Tab>
                <Tab disabled>Disabled Tab</Tab>
              </TabGroup>
            </div>

            <div className="showcase-item">
              <h4>Visibility States (Admin Mode)</h4>
              <TabGroup>
                <Tab active visible adminMode>Visible Tab</Tab>
                <Tab visible={false} adminMode>Hidden Tab</Tab>
                <Tab visible adminMode>Another Visible</Tab>
              </TabGroup>
            </div>

            <div className="showcase-item">
              <h4>Starred States</h4>
              <TabGroup>
                <Tab active starred>Starred Tab</Tab>
                <Tab starred={false}>Not Starred</Tab>
                <Tab starred>Another Starred</Tab>
              </TabGroup>
            </div>

            <div className="showcase-item">
              <h4>All States Combined</h4>
              <TabGroup>
                <Tab active visible starred adminMode>Active, Visible, Starred</Tab>
                <Tab visible={false} starred adminMode>Hidden, Starred</Tab>
                <Tab visible starred={false} adminMode>Visible, Not Starred</Tab>
                <Tab visible={false} starred={false} adminMode>Hidden, Not Starred</Tab>
              </TabGroup>
            </div>

            <div className="showcase-item">
              <h4>Admin Only Tab</h4>
              <TabGroup>
                <Tab active adminOnly>Admin Only Tab</Tab>
                <Tab adminOnly>Another Admin Only</Tab>
              </TabGroup>
            </div>
          </div>
        )}

        {activeShowcaseTab === 'inputs' && (
          <div className="showcase-section">
            <h3>Input Fields</h3>
            <div className="showcase-grid">
              <div className="showcase-item">
                <h4>Text Input</h4>
                <Input
                  type="text"
                  label="Username"
                  placeholder="Enter username"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>

              <div className="showcase-item">
                <h4>Input with Error</h4>
                <Input
                  type="text"
                  label="Email"
                  placeholder="Enter email"
                  error={inputError}
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>

              <div className="showcase-item">
                <h4>Password Input</h4>
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter password"
                />
              </div>

              <div className="showcase-item">
                <h4>Required Field</h4>
                <Input
                  type="text"
                  label="Required Field"
                  placeholder="This field is required"
                  required
                />
              </div>

              <div className="showcase-item">
                <h4>Disabled Input</h4>
                <Input
                  type="text"
                  label="Disabled"
                  value="Cannot edit"
                  disabled
                />
              </div>

              <div className="showcase-item">
                <h4>Input Sizes</h4>
                <Input
                  type="text"
                  label="Small"
                  size="small"
                  placeholder="Small input"
                />
                <Input
                  type="text"
                  label="Medium"
                  size="medium"
                  placeholder="Medium input"
                />
                <Input
                  type="text"
                  label="Large"
                  size="large"
                  placeholder="Large input"
                />
              </div>
            </div>
          </div>
        )}

        {activeShowcaseTab === 'cards' && (
          <div className="showcase-section">
            <h3>Cards</h3>
            <div className="showcase-grid">
              <div className="showcase-item">
                <h4>Default Card</h4>
                <Card>
                  <p>This is a default card with some content.</p>
                </Card>
              </div>

              <div className="showcase-item">
                <h4>Card with Header</h4>
                <Card
                  header="Card Header"
                >
                  <p>Card body content goes here.</p>
                </Card>
              </div>

              <div className="showcase-item">
                <h4>Card with Footer</h4>
                <Card
                  footer={<Button variant="primary" size="small">Action</Button>}
                >
                  <p>Card with footer actions.</p>
                </Card>
              </div>

              <div className="showcase-item">
                <h4>Clickable Card</h4>
                <Card
                  variant="clickable"
                  onClick={() => alert('Card clicked!')}
                >
                  <p>Click this card to interact.</p>
                </Card>
              </div>

              <div className="showcase-item">
                <h4>Active Card</h4>
                <Card variant="active">
                  <p>This card indicates an active state.</p>
                </Card>
              </div>

              <div className="showcase-item">
                <h4>Error Card</h4>
                <Card variant="error">
                  <p>This card indicates an error state.</p>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeShowcaseTab === 'badges' && (
          <div className="showcase-section">
            <h3>Badges</h3>
            <div className="showcase-grid">
              <div className="showcase-item">
                <h4>Badge Variants</h4>
                <div className="showcase-row" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>

              <div className="showcase-item">
                <h4>Badge Sizes</h4>
                <div className="showcase-row" style={{ gap: '0.5rem', alignItems: 'center' }}>
                  <Badge variant="primary" size="small">Small</Badge>
                  <Badge variant="primary" size="medium">Medium</Badge>
                  <Badge variant="primary" size="large">Large</Badge>
                </div>
              </div>

              <div className="showcase-item">
                <h4>Badge Usage Examples</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    Status: <Badge variant="success">Online</Badge>
                  </div>
                  <div>
                    Count: <Badge variant="primary">42</Badge>
                  </div>
                  <div>
                    Alert: <Badge variant="danger">Critical</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeShowcaseTab === 'checkboxes' && (
          <div className="showcase-section">
            <h3>Checkboxes</h3>
            <div className="showcase-grid">
              <div className="showcase-item">
                <h4>Basic Checkboxes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Checkbox
                    checked={checkboxStates.checkbox1}
                    onChange={handleCheckboxChange('checkbox1')}
                    label="Checked checkbox"
                  />
                  <Checkbox
                    checked={checkboxStates.checkbox2}
                    onChange={handleCheckboxChange('checkbox2')}
                    label="Unchecked checkbox"
                  />
                  <Checkbox
                    checked={checkboxStates.checkbox3}
                    onChange={handleCheckboxChange('checkbox3')}
                    label="Another checked"
                  />
                </div>
              </div>

              <div className="showcase-item">
                <h4>Checkbox Sizes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Checkbox
                    size="small"
                    checked={checkboxStates.checkbox1}
                    onChange={handleCheckboxChange('checkbox1')}
                    label="Small checkbox"
                  />
                  <Checkbox
                    size="medium"
                    checked={checkboxStates.checkbox2}
                    onChange={handleCheckboxChange('checkbox2')}
                    label="Medium checkbox"
                  />
                  <Checkbox
                    size="large"
                    checked={checkboxStates.checkbox3}
                    onChange={handleCheckboxChange('checkbox3')}
                    label="Large checkbox"
                  />
                </div>
              </div>

              <div className="showcase-item">
                <h4>Disabled Checkboxes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Checkbox
                    checked={false}
                    onChange={() => {}}
                    label="Disabled unchecked"
                    disabled
                  />
                  <Checkbox
                    checked={true}
                    onChange={() => {}}
                    label="Disabled checked"
                    disabled
                  />
                </div>
              </div>

              <div className="showcase-item">
                <h4>Stats Tab Style (Grouped)</h4>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem',
                  background: 'var(--hiddenTabBackground)',
                  padding: '1rem',
                  borderRadius: '4px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    padding: '4px 8px',
                    background: 'var(--background)',
                    borderRadius: '4px'
                  }}>
                    <span style={{ fontWeight: 500, marginRight: '8px' }}>nas</span>
                    <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
                      <Checkbox
                        size="small"
                        checked={checkboxStates.checkbox1}
                        onChange={handleCheckboxChange('checkbox1')}
                        label="Read"
                      />
                      <Checkbox
                        size="small"
                        checked={checkboxStates.checkbox2}
                        onChange={handleCheckboxChange('checkbox2')}
                        label="Write"
                      />
                    </div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    padding: '4px 8px',
                    background: 'var(--background)',
                    borderRadius: '4px'
                  }}>
                    <span style={{ fontWeight: 500, marginRight: '8px' }}>root</span>
                    <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
                      <Checkbox
                        size="small"
                        checked={checkboxStates.checkbox3}
                        onChange={handleCheckboxChange('checkbox3')}
                        label="Read"
                      />
                      <Checkbox
                        size="small"
                        checked={checkboxStates.checkbox4}
                        onChange={handleCheckboxChange('checkbox4')}
                        label="Write"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeShowcaseTab === 'utilities' && (
          <div className="showcase-section">
            <h3>Utility Components</h3>
            <div className="showcase-grid">
              <div className="showcase-item">
                <h4>Visibility Toggle</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <VisibilityToggle
                      visible={true}
                      onChange={(v) => console.log('Visible:', v)}
                      size="small"
                    />
                    <span>Small - Visible</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <VisibilityToggle
                      visible={false}
                      onChange={(v) => console.log('Visible:', v)}
                      size="medium"
                    />
                    <span>Medium - Hidden</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <VisibilityToggle
                      visible={true}
                      onChange={(v) => console.log('Visible:', v)}
                      size="large"
                      disabled
                    />
                    <span>Large - Disabled</span>
                  </div>
                </div>
              </div>

              <div className="showcase-item">
                <h4>Plus Button</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                  <PlusButton
                    size="small"
                    onClick={() => console.log('Plus clicked')}
                    aria-label="Add item"
                  />
                  <PlusButton
                    size="medium"
                    onClick={() => console.log('Plus clicked')}
                    aria-label="Add item"
                  />
                  <PlusButton
                    size="large"
                    onClick={() => console.log('Plus clicked')}
                    aria-label="Add item"
                  />
                  <PlusButton
                    variant="secondary"
                    onClick={() => console.log('Plus clicked')}
                    aria-label="Add item"
                  />
                  <PlusButton
                    disabled
                    onClick={() => console.log('Plus clicked')}
                    aria-label="Add item"
                  />
                </div>
              </div>

              <div className="showcase-item">
                <h4>Editable Field</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                  <EditableField
                    value="Click to edit this text"
                    onSave={async (value) => {
                      console.log('Saved:', value);
                    }}
                    placeholder="Enter text here"
                  />
                  <EditableField
                    value=""
                    onSave={async (value) => {
                      console.log('Saved:', value);
                    }}
                    placeholder="Empty field - click to edit"
                  />
                  <EditableField
                    value="Disabled field"
                    onSave={async (value) => {
                      console.log('Saved:', value);
                    }}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeShowcaseTab === 'calendar-time' && (
          <div className="showcase-section">
            <h3>Calendar & Time Picker</h3>
            <div className="showcase-grid">
              <div className="showcase-item">
                <h4>Calendar - Weekly Mode</h4>
                <Calendar
                  frequency="weekly"
                  value={calendarWeeklyValue}
                  onChange={setCalendarWeeklyValue}
                  size="medium"
                />
                {calendarWeeklyValue && (
                  <p style={{ marginTop: '0.5rem', fontSize: '12px', color: 'var(--secondary)' }}>
                    Selected: {calendarWeeklyValue}
                  </p>
                )}
              </div>

              <div className="showcase-item">
                <h4>Calendar - Monthly Mode</h4>
                <Calendar
                  frequency="monthly"
                  value={calendarMonthlyValue}
                  onChange={setCalendarMonthlyValue}
                  size="medium"
                />
                {calendarMonthlyValue && (
                  <p style={{ marginTop: '0.5rem', fontSize: '12px', color: 'var(--secondary)' }}>
                    Selected: {calendarMonthlyValue}
                  </p>
                )}
              </div>

              <div className="showcase-item">
                <h4>Time Picker</h4>
                <TimePicker
                  value={timePickerValue}
                  onChange={setTimePickerValue}
                  size="medium"
                />
                <p style={{ marginTop: '0.5rem', fontSize: '12px', color: 'var(--secondary)' }}>
                  Selected: {timePickerValue} (24-hour format)
                </p>
              </div>

              <div className="showcase-item">
                <h4>Calendar Sizes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '12px', display: 'block', marginBottom: '0.25rem' }}>Small</label>
                    <Calendar
                      frequency="weekly"
                      value=""
                      onChange={() => {}}
                      size="small"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', display: 'block', marginBottom: '0.25rem' }}>Medium</label>
                    <Calendar
                      frequency="weekly"
                      value=""
                      onChange={() => {}}
                      size="medium"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', display: 'block', marginBottom: '0.25rem' }}>Large</label>
                    <Calendar
                      frequency="weekly"
                      value=""
                      onChange={() => {}}
                      size="large"
                    />
                  </div>
                </div>
              </div>

              <div className="showcase-item">
                <h4>Time Picker Sizes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '12px', display: 'block', marginBottom: '0.25rem' }}>Small</label>
                    <TimePicker
                      value="14:30"
                      onChange={() => {}}
                      size="small"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', display: 'block', marginBottom: '0.25rem' }}>Medium</label>
                    <TimePicker
                      value="14:30"
                      onChange={() => {}}
                      size="medium"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', display: 'block', marginBottom: '0.25rem' }}>Large</label>
                    <TimePicker
                      value="14:30"
                      onChange={() => {}}
                      size="large"
                    />
                  </div>
                </div>
              </div>

              <div className="showcase-item">
                <h4>Disabled States</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Calendar
                    frequency="weekly"
                    value="Monday"
                    onChange={() => {}}
                    disabled
                  />
                  <TimePicker
                    value="09:00"
                    onChange={() => {}}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeShowcaseTab === 'row-info-tile' && (
          <div className="showcase-section">
            <h3>Row Info Tile</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--secondary)' }}>
              A flexible row information tile component for displaying structured data with icons, badges, metadata, and actions.
            </p>

            <div className="showcase-grid">
              <div className="showcase-item">
                <h4>Basic Row</h4>
                <RowInfoTile
                  icon="📁"
                  title="Documents"
                  subtitle="Folder"
                />
              </div>

              <div className="showcase-item">
                <h4>With Badges</h4>
                <RowInfoTile
                  icon="📄"
                  title="report.pdf"
                  badges={[
                    { label: 'PDF', variant: 'primary' },
                    { label: '2.3 MB', variant: 'info' }
                  ]}
                />
              </div>

              <div className="showcase-item">
                <h4>With Metadata</h4>
                <RowInfoTile
                  icon="📁"
                  title="backups"
                  metadata={
                    <>
                      <span>Size: 15.2 GB</span>
                      <span>Modified: 7/19/2025</span>
                    </>
                  }
                />
              </div>

              <div className="showcase-item">
                <h4>With Checkbox</h4>
                <RowInfoTile
                  icon="📁"
                  title="Old"
                  subtitle="Directory"
                  showCheckbox
                  selected={selectedTiles['old'] || false}
                  onSelect={(checked) => setSelectedTiles(prev => ({ ...prev, old: checked }))}
                  badges={[{ label: 'Directory', variant: 'success' }]}
                  metadata={<span>7/19/2025, 1:41:54 PM</span>}
                />
              </div>

              <div className="showcase-item">
                <h4>With Actions</h4>
                <RowInfoTile
                  icon="📁"
                  title="documents"
                  subtitle="Directory"
                  onEdit={() => alert('Edit clicked')}
                  onDelete={() => alert('Delete clicked')}
                />
              </div>

              <div className="showcase-item">
                <h4>Selected State</h4>
                <RowInfoTile
                  icon="📁"
                  title="Selected Folder"
                  showCheckbox
                  selected={true}
                  onSelect={() => {}}
                  variant="selected"
                />
              </div>

              <div className="showcase-item">
                <h4>Active Variant</h4>
                <RowInfoTile
                  icon="📁"
                  title="Active Directory"
                  variant="active"
                  badges={[{ label: 'Directory', variant: 'success' }]}
                />
              </div>

              <div className="showcase-item">
                <h4>Error Variant</h4>
                <RowInfoTile
                  icon="⚠️"
                  title="Error File"
                  variant="error"
                  badges={[{ label: 'Error', variant: 'danger' }]}
                />
              </div>

              <div className="showcase-item">
                <h4>Clickable Row</h4>
                <RowInfoTile
                  icon="📁"
                  title="Clickable Folder"
                  subtitle="Double-click to open"
                  onClick={() => alert('Single click')}
                  onDoubleClick={() => alert('Double click')}
                  badges={[{ label: 'Directory', variant: 'success' }]}
                />
              </div>

              <div className="showcase-item">
                <h4>Full Featured</h4>
                <RowInfoTile
                  icon="📁"
                  title="backups"
                  subtitle="Directory"
                  showCheckbox
                  selected={selectedTiles['backups'] || false}
                  onSelect={(checked) => setSelectedTiles(prev => ({ ...prev, backups: checked }))}
                  badges={[
                    { label: 'Directory', variant: 'success' },
                    { label: '15.2 GB', variant: 'info' }
                  ]}
                  metadata={
                    <>
                      <span>Modified: 7/19/2025</span>
                      <span>Items: 42</span>
                    </>
                  }
                  onEdit={() => alert('Edit')}
                  onDelete={() => alert('Delete')}
                  onClick={() => console.log('Row clicked')}
                />
              </div>

              <div className="showcase-item">
                <h4>Disabled State</h4>
                <RowInfoTile
                  icon="📁"
                  title="Disabled Folder"
                  disabled
                  badges={[{ label: 'Directory', variant: 'success' }]}
                />
              </div>

              <div className="showcase-item">
                <h4>Custom Actions</h4>
                <RowInfoTile
                  icon="📁"
                  title="Custom Actions"
                  actions={
                    <>
                      <Button variant="secondary" size="small" onClick={() => alert('Custom 1')}>
                        Action 1
                      </Button>
                      <Button variant="secondary" size="small" onClick={() => alert('Custom 2')}>
                        Action 2
                      </Button>
                    </>
                  }
                />
              </div>
            </div>

            <h3>Usage Examples</h3>
            <div className="showcase-item">
              <h4>FileItem-like Pattern</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <RowInfoTile
                  icon="📁"
                  title="Old"
                  showCheckbox
                  selected={selectedTiles['file1'] || false}
                  onSelect={(checked) => setSelectedTiles(prev => ({ ...prev, file1: checked }))}
                  badges={[{ label: 'Directory', variant: 'success' }]}
                  metadata={<span>7/19/2025, 1:41:54 PM</span>}
                  onEdit={() => alert('Rename')}
                  onDelete={() => alert('Delete')}
                />
                <RowInfoTile
                  icon="📄"
                  title="document.pdf"
                  showCheckbox
                  selected={selectedTiles['file2'] || false}
                  onSelect={(checked) => setSelectedTiles(prev => ({ ...prev, file2: checked }))}
                  badges={[{ label: 'PDF', variant: 'primary' }]}
                  metadata={
                    <>
                      <span>2.3 MB</span>
                      <span>7/18/2025, 3:22:10 PM</span>
                    </>
                  }
                  onEdit={() => alert('Rename')}
                  onDelete={() => alert('Delete')}
                />
              </div>
            </div>

            <div className="showcase-item">
              <h4>RepositoryCard-like Pattern</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <RowInfoTile
                  icon="📦"
                  title="my-repository"
                  showCheckbox
                  selected={selectedTiles['repo1'] || false}
                  onSelect={(checked) => setSelectedTiles(prev => ({ ...prev, repo1: checked }))}
                  badges={[
                    { label: '✓ active', variant: 'success' }
                  ]}
                  metadata={
                    <>
                      <div><strong>Path:</strong> /home/user/repos/my-repo</div>
                      <div><strong>Size:</strong> 45.2 MB</div>
                      <div><strong>Last Commit:</strong> 2 days ago</div>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
