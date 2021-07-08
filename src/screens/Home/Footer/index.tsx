import * as React from 'react';
import Theme from '../../../utils/theme';
import IconSet from '../../../utils/fonts';

const BORDER_RD = 35;

interface FooterItem {
  icon: string;
}

const ITEMS: FooterItem[] = [
  {
    icon: 'appstore-o',
  },
  {
    icon: 'playcircleo',
  },
  {
    icon: 'hearto',
  },
  {
    icon: 'user',
  }
]

const Footer = () => {
  return (
    <gridLayout borderTopLeftRadius={BORDER_RD} borderTopRightRadius={BORDER_RD} row={2} columns="*, *, *, *" background={Theme[500]}>
      {ITEMS.map((item, index) => {
        return (
          <flexboxLayout key={index} style={{
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }} col={index}>
            <label className="AntDesign size30" text={IconSet.AntDesign[item.icon]} />
          </flexboxLayout>
        )
      })}
    </gridLayout>
  )
}

export default Footer;
