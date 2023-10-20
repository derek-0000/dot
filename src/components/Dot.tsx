type DotProps = {
  color: string;
  size: number;
};
export default function Dot(props:DotProps) {

  return <div className="dot rounded-full"
  style={{
    width: props.size,
    height: props.size,
    backgroundColor: props.color,
    boxShadow:`0px 0px 2px 2px ${props.color}`
  }}></div>;

}
