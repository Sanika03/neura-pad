"use client";

import LoadingSpinner from "@/components/ui/loadingSpinner";
import {
  ClientSideSuspense,
  RoomProvider as RoomProviderWrapper,
} from "@liveblocks/react/suspense";

function RoomProvider({
  roomId,
  children,
}: {
  roomId: string;
  children: React.ReactNode;
}) {
  return (
    <RoomProviderWrapper
      id={roomId}
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={<LoadingSpinner />}> 
        {children}
      </ClientSideSuspense>
    </RoomProviderWrapper>
  );
}
export default RoomProvider;
