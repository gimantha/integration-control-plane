/**
 * Copyright (c) 2026, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Context Engines are wip-only for now (the Devant Context Engine service). Signatures mirror Contracts.ContextEngineApi.

import type {
  ContextEngine,
  ContextEngineDetail,
  ContextEngineExposure,
  ContextGrant,
  ContextJob,
  ContextJobHandle,
  ContextPrincipal,
  ContextQueryInput,
  ContextQueryResult,
  CreateContextEngineInput,
  CreateContextEngineResult,
  PutContextGrantInput,
} from '../../types/contextEngine';

const ni = (name: string): never => {
  throw new Error(`[icp] contextEngine.${name}: not implemented`);
};

export const listContextEngines = (): Promise<ContextEngine[]> => ni('listContextEngines');
export const getContextEngine = (_engineId: string): Promise<ContextEngineDetail> => ni('getContextEngine');
export const createContextEngine = (_input: CreateContextEngineInput): Promise<CreateContextEngineResult> => ni('createContextEngine');
export const deleteContextEngine = (_engineId: string): Promise<void> => ni('deleteContextEngine');
export const updateContextEngineExposure = (_engineId: string, _exposure: ContextEngineExposure): Promise<ContextEngineExposure> => ni('updateContextEngineExposure');
export const rebuildContextEngine = (_engineId: string): Promise<ContextJobHandle> => ni('rebuildContextEngine');
export const getContextJob = (_jobId: string): Promise<ContextJob> => ni('getContextJob');
export const queryContextEngine = (_input: ContextQueryInput): Promise<ContextQueryResult> => ni('queryContextEngine');
export const listContextGrants = (_engineId: string): Promise<ContextGrant[]> => ni('listContextGrants');
export const putContextGrant = (_input: PutContextGrantInput): Promise<ContextGrant> => ni('putContextGrant');
export const deleteContextGrant = (_engineId: string, _grantId: string): Promise<void> => ni('deleteContextGrant');
export const getContextPrincipal = (): Promise<ContextPrincipal> => ni('getContextPrincipal');
