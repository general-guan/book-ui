import React, { FC } from "react"

type ButtonProps = {
  children?: string
  /**
   * 设置按钮大小
   */
  size?: "large" | "default" | "small"
  /**
   * 设置按钮类型
   */
  type?: "primary" | "dashed" | "link" | "text" | "default"
}
const Button: FC<ButtonProps> = ({ children, size, type }) => {
  return <button className="bg-orange-400">{children}</button>
}

export default Button
