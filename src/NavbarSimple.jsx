import { useState } from 'react';
import { //change icons when you are ready - each tab can have its own
//   IconBellRinging,
//   IconDatabaseImport,
//   IconFingerprint,
//   IconKey,
//   IconLogout,
//   IconReceipt2,
//   IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';
import classes from './NavbarSimple.module.css';

const data = [ //add :icon (icon name) once icons need to be added, put commas after tab names and add icons
  { link: '', label: 'Structured Speeches'},
  { link: '', label: 'Floor Speeches'},
  { link: '', label: 'Moderated Caucus'},
  { link: '', label: 'Custom Timer',},
  //{ link: '', label: 'Databases', icon: IconDatabaseImport },
];

export function NavbarSimple() {
  const [active, setActive] = useState('Billing');


  //map function loops through a list and returns stuff
  //returns the look of the website - html
  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      {/* <item.icon className={classes.linkIcon} stroke={1.5} /> */}
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          {/* <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} /> */}
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          {/* <IconLogout className={classes.linkIcon} stroke={1.5} /> */}
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}