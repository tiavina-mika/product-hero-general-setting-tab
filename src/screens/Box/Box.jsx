import React from "react";
import { InputDropdown } from "../../components/InputDropdown";
import { InputSub } from "../../components/InputSub";
import { MenuTable } from "../../components/MenuTable";
import { ChevronRight7 } from "../../icons/ChevronRight7";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="frame-wrapper">
        <div className="frame-3">
          <header className="header">
            <div className="h-1-wrapper">
              <h1 className="h-1">Paramètres</h1>
            </div>
            <div className="div-wrapper">
              <div className="frame-4">
                <MenuTable
                  content="Général"
                  moiStyle={{
                    fontSize: "14px",
                    letterSpacing: "0",
                    lineHeight: "14px",
                    marginTop: "-2.00px",
                  }}
                  state="primary"
                />
                <MenuTable
                  content="Produits"
                  moiStyle={{
                    fontSize: "14px",
                    letterSpacing: "0",
                    lineHeight: "14px",
                    marginTop: "-2.00px",
                  }}
                  state="quaternary"
                />
                <MenuTable
                  content="Workflow"
                  moiStyle={{
                    fontSize: "14px",
                    letterSpacing: "0",
                    lineHeight: "14px",
                    marginTop: "-2.00px",
                  }}
                  state="quaternary"
                />
                <MenuTable
                  content="Drivers"
                  moiStyle={{
                    fontSize: "14px",
                    letterSpacing: "0",
                    lineHeight: "14px",
                    marginTop: "-2.00px",
                  }}
                  state="quaternary"
                />
                <MenuTable
                  content="OKR"
                  moiStyle={{
                    fontSize: "14px",
                    letterSpacing: "0",
                    lineHeight: "14px",
                    marginTop: "-2.00px",
                  }}
                  state="quaternary"
                />
                <MenuTable
                  content="Équipes"
                  moiStyle={{
                    fontSize: "14px",
                    letterSpacing: "0",
                    lineHeight: "14px",
                    marginTop: "-2.00px",
                  }}
                  state="quaternary"
                />
                <MenuTable
                  content="Profils"
                  moiStyle={{
                    fontSize: "14px",
                    letterSpacing: "0",
                    lineHeight: "14px",
                    marginTop: "-2.00px",
                  }}
                  state="quaternary"
                />
                <MenuTable
                  content="Utilisateurs"
                  moiStyle={{
                    fontSize: "14px",
                    letterSpacing: "0",
                    lineHeight: "14px",
                    marginTop: "-2.00px",
                  }}
                  state="quaternary"
                />
              </div>
            </div>
          </header>
          <div className="gnral">
            <div className="frame-5">
              <div className="frame-6">
                <div className="text-wrapper-2">Mes informations</div>
                <ChevronRight7
                  style={{
                    height: "16px",
                    minWidth: "16px",
                    position: "relative",
                  }}
                />
              </div>
              <InputSub
                content="Roudoudou@entreprise.com"
                state="default"
                style={{
                  borderColor: "#f3f3f3",
                  width: "342px",
                }}
                subName="E-mail"
                superherosLimitedStyle={{
                  color: "#2f2f2f",
                }}
              />
            </div>
            <div className="frame-7">
              <div className="frame-8">
                <div className="plan-billing">Plan &amp; Billing</div>
                <ChevronRight7
                  style={{
                    height: "16px",
                    minWidth: "16px",
                    position: "relative",
                  }}
                />
              </div>
              <div className="input-dropdown-2">
                <div className="add-2">
                  <div className="text-wrapper-3">💸</div>
                </div>
                <div className="input-champs-2">
                  <div className="frame-9">
                    <div className="text-wrapper-4">Roadmap - 49€/mois</div>
                    <p className="p">1 rôle + 3 utilisateurs</p>
                  </div>
                  <ChevronRight7
                    style={{
                      height: "16px",
                      minWidth: "16px",
                      position: "relative",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="frame-10">
              <div className="text-wrapper-5">Assistance</div>
              <InputDropdown
                content="Contacter l&#39;assistance"
                emoji="💬"
                icon={
                  <ChevronRight7
                    style={{
                      height: "16px",
                      minWidth: "16px",
                      position: "relative",
                    }}
                  />
                }
                showAddSub={false}
                state="filled"
                style={{
                  alignSelf: "stretch",
                  boxShadow: "unset",
                  width: "unset",
                }}
              />
            </div>
            <div className="frame-11">
              <div className="text-wrapper-6">Plus</div>
              <div className="frame-12">
                <InputDropdown
                  content="Évaluer l&#39;application"
                  emoji="⭐️"
                  icon={
                    <ChevronRight7
                      style={{
                        height: "16px",
                        minWidth: "16px",
                        position: "relative",
                      }}
                    />
                  }
                  showAddSub={false}
                  state="filled"
                  style={{
                    alignSelf: "stretch",
                    boxShadow: "unset",
                    width: "unset",
                  }}
                />
                <InputDropdown
                  content="Politique de confidentialité"
                  emoji="👁"
                  icon={
                    <ChevronRight7
                      style={{
                        height: "16px",
                        minWidth: "16px",
                        position: "relative",
                      }}
                    />
                  }
                  showAddSub={false}
                  state="filled"
                  style={{
                    alignSelf: "stretch",
                    boxShadow: "unset",
                    width: "unset",
                  }}
                />
                <InputDropdown
                  content="Version"
                  emoji="📱"
                  showAddSub={false}
                  state="filled"
                  style={{
                    alignSelf: "stretch",
                    boxShadow: "unset",
                    width: "unset",
                  }}
                />
              </div>
            </div>
            <div className="input-dropdown-wrapper">
              <InputDropdown
                ajouterUnDriverStyle={{
                  color: "#ff3b5f",
                  textAlign: "center",
                }}
                content="Deconnexion"
                inputChampsStyle={{
                  borderRadius: "6px",
                  justifyContent: "center",
                  marginLeft: "unset",
                }}
                showAddEmoji={false}
                showChevron={false}
                state="filled"
                style={{
                  alignItems: "center",
                  alignSelf: "stretch",
                  justifyContent: "center",
                  width: "unset",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
