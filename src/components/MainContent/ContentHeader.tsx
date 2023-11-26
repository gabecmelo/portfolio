type ContentHeaderProps = {
  route: string;
};

function ContentHeader({ route }: ContentHeaderProps) {
  return <div id={route} />;
}

export default ContentHeader;
