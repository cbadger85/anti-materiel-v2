export enum ValidationType {
  ENTRY_REQUIRES_ENTRY = 'ENTRY_REQUIRES_ENTRY',
  ENTRY_FORBIDS_ENTRY = 'ENTRY_FORBIDS_ENTRY',
  ENTRY_REQUIRES_ENTRY_IN_COMBAT_GROUP = 'ENTRY_REQUIRES_ENTRY_IN_COMBAT_GROUP',
  ENTRY_REQUIRES_RULE_IN_COMBAT_GROUP = 'ENTRY_REQUIRES_RULE_IN_COMBAT_GROUP',
}

export interface EntryRequiresEntry {
  id: string;
  type: ValidationType.ENTRY_REQUIRES_ENTRY;
  entityId: string;
  requiredEntityId: string;
  amount?: number;
}

export interface EntryForbidsEntry {
  id: string;
  type: ValidationType.ENTRY_FORBIDS_ENTRY;
  entityId: string;
  fobiddenEntryId: string;
}

export interface EntryRequiresEntryInCombatGroup {
  id: string;
  type: ValidationType.ENTRY_REQUIRES_ENTRY_IN_COMBAT_GROUP;
  entityId: string;
  requiredEntityId: string;
}

export interface EntryRequiresRuleInCombatGroup {
  id: string;
  type: ValidationType.ENTRY_REQUIRES_RULE_IN_COMBAT_GROUP;
  entityId: string;
  requiredRuleId: string;
}

export type EntryValidation =
  | EntryRequiresEntry
  | EntryForbidsEntry
  | EntryRequiresEntryInCombatGroup
  | EntryRequiresRuleInCombatGroup;
