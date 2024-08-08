import { Input } from "@/components/atoms";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { CSSProperties } from "react";

type Prop = {
  placeholder?: string;
  enterButton?: string;
  size?: SizeType;
  style?: CSSProperties;
  className?: string;
  allowClear?: boolean;
  maxLength?: number;
  disable?: boolean;
  value?: string;
  handleSearch?: () => void;
  onChange?: () => void;
};

const { Search } = Input;

export default function SearchBox({
  handleSearch,
  placeholder,
  enterButton,
  size,
  style,
  className,
  allowClear,
  maxLength,
  disable,
  value,
  onChange
}: Prop) {
  return (
    <Search
      placeholder={placeholder}
      enterButton={enterButton ?? "Search"}
      onSearch={handleSearch}
      size={size}
      style={style}
      className={className}
      allowClear={allowClear}
      maxLength={maxLength}
      disabled={disable}
      value={value}
      onChange={onChange}
    />
  );
}
