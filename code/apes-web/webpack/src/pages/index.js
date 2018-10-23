import HomeLayout from './../layouts/HomeLayout';

export default function(props) {
  return (
    <HomeLayout>
      { props.children }
    </HomeLayout>
  );
}
