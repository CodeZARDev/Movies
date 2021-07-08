import * as React from 'react';
import Theme from '../../../utils/theme';
import IconSet from '../../../utils/fonts';
import { getStatusBarHeight } from '../../../utils/index';

const Header = () => {
  return (
    <gridLayout marginTop={getStatusBarHeight() + 16} height={45} paddingLeft={16} paddingRight={16} columns="auto, *, auto">
      <HeaderButton col={0} icon="menufold" />
      <HeaderButton col={2} icon="search1" />
    </gridLayout>
  )
}

interface HeaderButtonProps {
  col: number;
  icon: string;
}

const HeaderButton = ({
  col,
  icon
} : HeaderButtonProps) => {
  return (
    <flexboxLayout borderRadius={10} width={45} height={70} borderColor="#fff" borderWidth={1} col={col} alignItems="center" justifyContent="center">
      <label className="AntDesign size25" color="#fff" text={IconSet.AntDesign[icon]} />
    </flexboxLayout>
  )
}

export default Header
