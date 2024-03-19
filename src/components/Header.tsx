import { Stack, Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <Stack direction="row">
      <Box
        component="img"
        src={user?.picture}
        alt={user?.name}
        width={16}
        height={16}
        borderRadius={100}
      />
      <div>{user?.sub}</div>
    </Stack>
  );
}
