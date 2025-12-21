import { Stack, useFocusEffect, useRouter } from "expo-router";
import React from "react";



export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
  );
}

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuth = false;

  useFocusEffect(
    React.useCallback(() => {
      if (!isAuth) {
        router.replace("/auth");
      }
    }, [isAuth, router])
  );

  return <>{children}</>;
}