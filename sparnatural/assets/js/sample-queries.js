var queries = [
  {
    label_en: "Metadata of documents from know identifiers",
    label_fr: "Métadonnées de documents dont on connait les identifiants",
    query: 
      {
        "distinct": true,
        "variables": [
          {
            "termType": "Variable",
            "value": "Document"
          },
          {
            "expression": {
              "type": "aggregate",
              "aggregation": "group_concat",
              "distinct": false,
              "expression": {
                "termType": "Variable",
                "value": "Agent"
              }
            },
            "variable": {
              "termType": "Variable",
              "value": "Auteurs"
            }
          },
          {
            "expression": {
              "type": "aggregate",
              "aggregation": "group_concat",
              "distinct": false,
              "expression": {
                "termType": "Variable",
                "value": "Langue"
              }
            },
            "variable": {
              "termType": "Variable",
              "value": "Langues"
            }
          },
          {
            "expression": {
              "type": "aggregate",
              "aggregation": "group_concat",
              "distinct": false,
              "expression": {
                "termType": "Variable",
                "value": "Description"
              }
            },
            "variable": {
              "termType": "Variable",
              "value": "Descriptions"
            }
          },
          {
            "expression": {
              "type": "aggregate",
              "aggregation": "group_concat",
              "distinct": false,
              "expression": {
                "termType": "Variable",
                "value": "Type"
              }
            },
            "variable": {
              "termType": "Variable",
              "value": "Types"
            }
          },
          {
            "expression": {
              "type": "aggregate",
              "aggregation": "group_concat",
              "distinct": false,
              "expression": {
                "termType": "Variable",
                "value": "Discipline"
              }
            },
            "variable": {
              "termType": "Variable",
              "value": "Disciplines"
            }
          }
        ],
        "order": null,
        "branches": [
          {
            "line": {
              "s": "Document",
              "p": "http://isidore.science/shapes/Document_identifier",
              "o": "Identifier",
              "sType": "http://isidore.science/shapes/Document",
              "oType": "http://isidore.science/shapes/Identifier",
              "criterias": [
                {
                  "label": "10.3406/hom.1989.369083",
                  "criteria": {
                    "search": "10.3406/hom.1989.369083"
                  }
                },
                {
                  "label": "10670/1.15809b64f9c93a34fc00262f6df8e9eb77288ec8",
                  "criteria": {
                    "search": "10670/1.15809b64f9c93a34fc00262f6df8e9eb77288ec8"
                  }
                }
              ]
            }
          },
          {
            "line": {
              "s": "Document",
              "p": "http://isidore.science/shapes/Document_creator",
              "o": "Agent",
              "sType": "http://isidore.science/shapes/Document",
              "oType": "http://isidore.science/shapes/Agent",
              "criterias": []
            },
            "optional": true
          },
          {
            "line": {
              "s": "Document",
              "p": "http://isidore.science/shapes/Document_language",
              "o": "Langue",
              "sType": "http://isidore.science/shapes/Document",
              "oType": "http://isidore.science/shapes/Text",
              "criterias": []
            },
            "optional": true
          },
          {
            "line": {
              "s": "Document",
              "p": "http://isidore.science/shapes/Document_description",
              "o": "Text_2",
              "sType": "http://isidore.science/shapes/Document",
              "oType": "http://isidore.science/shapes/Text",
              "criterias": []
            },
            "optional": true
          },
          {
            "line": {
              "s": "Document",
              "p": "http://isidore.science/shapes/Document_date",
              "o": "Description",
              "sType": "http://isidore.science/shapes/Document",
              "oType": "http://isidore.science/shapes/Text",
              "criterias": []
            },
            "optional": true
          },
          {
            "line": {
              "s": "Document",
              "p": "http://isidore.science/shapes/Document_typeDc",
              "o": "Type",
              "sType": "http://isidore.science/shapes/Document",
              "oType": "http://isidore.science/shapes/FewValues",
              "criterias": []
            },
            "optional": true
          },
          {
            "line": {
              "s": "Document",
              "p": "http://isidore.science/shapes/Document_topic",
              "o": "Discipline",
              "sType": "http://isidore.science/shapes/Document",
              "oType": "http://isidore.science/shapes/Discipline",
              "criterias": []
            },
            "optional": true
          }
        ],
        "limit": 1000
      }
  },
  {
    label_en: "Documents of the same author (from known doc http:// doc URI)",
    label_fr: "Documents des mêmes auteurs (à partir d'une URI de doc en http://)",
    query: 
      {
        "distinct": true,
        "variables": [
          {
            "termType": "Variable",
            "value": "Document"
          },
          {
            "termType": "Variable",
            "value": "Agent"
          }
        ],
        "order": null,
        "branches": [
          {
            "line": {
              "s": "Document",
              "p": "http://isidore.science/shapes/Document_creator",
              "o": "Agent",
              "sType": "http://isidore.science/shapes/Document",
              "oType": "http://isidore.science/shapes/Agent",
              "criterias": []
            },
            "children": [
              {
                "line": {
                  "s": "Agent",
                  "p": "http://isidore.science/shapes/Agent_inverse_creator",
                  "o": "Document_2",
                  "sType": "http://isidore.science/shapes/Agent",
                  "oType": "http://isidore.science/shapes/Document",
                  "criterias": [
                    {
                      "label": "http://isidore.science/document/10.3406/hom.1989.369083",
                      "criteria": {
                        "rdfTerm": {
                          "type": "uri",
                          "value": "http://isidore.science/document/10.3406/hom.1989.369083"
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "limit": 1000
      }
  },
  {
    label_en: "Documents about the same subject (from known doc http:// doc URI)",
    label_fr: "Documents sur les mêmes sujets (à partir d'une URI de doc en http://)",
    query: {
      "distinct": true,
      "variables": [
        {
          "termType": "Variable",
          "value": "Document"
        }
      ],
      "order": null,
      "branches": [
        {
          "line": {
            "s": "Document",
            "p": "http://isidore.science/shapes/Document_dctsubject",
            "o": "Subject",
            "sType": "http://isidore.science/shapes/Document",
            "oType": "http://isidore.science/shapes/Subject",
            "criterias": []
          },
          "children": [
            {
              "line": {
                "s": "Subject",
                "p": "http://isidore.science/shapes/Subject_inverse_subject",
                "o": "Document_2",
                "sType": "http://isidore.science/shapes/Subject",
                "oType": "http://isidore.science/shapes/Document",
                "criterias": [
                  {
                    "label": "http://isidore.science/document/10670/1.15809b64f9c93a34fc00262f6df8e9eb77288ec8",
                    "criteria": {
                      "rdfTerm": {
                        "type": "uri",
                        "value": "http://isidore.science/document/10670/1.15809b64f9c93a34fc00262f6df8e9eb77288ec8"
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "limit": 1000
    }
  },
  {
    label_en: "Documents of the same discipline (from known doc http:// doc URI)",
    label_fr: "Documents de la même discipline (à partir d'une URI de doc en http://)",
    query: {
      "distinct": true,
      "variables": [
        {
          "termType": "Variable",
          "value": "Document"
        }
      ],
      "order": null,
      "branches": [
        {
          "line": {
            "s": "Document",
            "p": "http://isidore.science/shapes/Document_topic",
            "o": "Discipline",
            "sType": "http://isidore.science/shapes/Document",
            "oType": "http://isidore.science/shapes/Discipline",
            "criterias": []
          },
          "children": [
            {
              "line": {
                "s": "Discipline",
                "p": "http://isidore.science/shapes/Discipline_inverse_subject",
                "o": "Document_2",
                "sType": "http://isidore.science/shapes/Discipline",
                "oType": "http://isidore.science/shapes/Document",
                "criterias": [
                  {
                    "label": "http://isidore.science/document/10670/1.15809b64f9c93a34fc00262f6df8e9eb77288ec8",
                    "criteria": {
                      "rdfTerm": {
                        "type": "uri",
                        "value": "http://isidore.science/document/10670/1.15809b64f9c93a34fc00262f6df8e9eb77288ec8"
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "limit": 1000
    }
  },
  {
    label_en: "Sources of the documents of an author",
    label_fr: "Sources des documents d'un auteur",
    query: {
      "distinct": true,
      "variables": [
        {
          "expression": {
            "type": "aggregate",
            "aggregation": "count",
            "distinct": false,
            "expression": {
              "termType": "Variable",
              "value": "Document"
            }
          },
          "variable": {
            "termType": "Variable",
            "value": "Document_count"
          }
        },
        {
          "termType": "Variable",
          "value": "Source"
        }
      ],
      "order": null,
      "branches": [
        {
          "line": {
            "s": "Document",
            "p": "http://isidore.science/shapes/Document_creator",
            "o": "Agent",
            "sType": "http://isidore.science/shapes/Document",
            "oType": "http://isidore.science/shapes/Agent",
            "criterias": [
              {
                "label": "Émile Provendier",
                "criteria": {
                  "rdfTerm": {
                    "type": "uri",
                    "value": "http://isidore.science/a/provendier_emile"
                  }
                }
              }
            ]
          }
        },
        {
          "line": {
            "s": "Document",
            "p": "http://isidore.science/shapes/Document_isAggregatedBy",
            "o": "Source",
            "sType": "http://isidore.science/shapes/Document",
            "oType": "http://isidore.science/shapes/Source",
            "criterias": []
          }
        }
      ],
      "limit": 1000
    }
  },
  {
    label_en: "Subjects of the documents of an author",
    label_fr: "Sujets des documents d'un auteur",
    query: {
      "distinct": true,
      "variables": [
        {
          "expression": {
            "type": "aggregate",
            "aggregation": "count",
            "distinct": false,
            "expression": {
              "termType": "Variable",
              "value": "Document"
            }
          },
          "variable": {
            "termType": "Variable",
            "value": "Document_count"
          }
        },
        {
          "termType": "Variable",
          "value": "Subject"
        }
      ],
      "order": null,
      "branches": [
        {
          "line": {
            "s": "Document",
            "p": "http://isidore.science/shapes/Document_dctsubject",
            "o": "Subject",
            "sType": "http://isidore.science/shapes/Document",
            "oType": "http://isidore.science/shapes/Subject",
            "criterias": []
          }
        },
        {
          "line": {
            "s": "Document",
            "p": "http://isidore.science/shapes/Document_creator",
            "o": "Agent",
            "sType": "http://isidore.science/shapes/Document",
            "oType": "http://isidore.science/shapes/Agent",
            "criterias": [
              {
                "label": "Émile Provendier",
                "criteria": {
                  "rdfTerm": {
                    "type": "uri",
                    "value": "http://isidore.science/a/provendier_emile"
                  }
                }
              }
            ]
          }
        }
      ],
      "limit": 1000
    }
  }
];
