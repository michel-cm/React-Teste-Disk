import React from "react";

import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

import { Api } from "../services/Api";

export const CandidateContext = createContext();

export function CandidateContextProvider(props) {
    
    const { user } = useAuth();

    return (
        <CandidateContext.Provider
          value={{        
            
          }}
        >
          {props.children}
        </CandidateContext.Provider>
      );
}